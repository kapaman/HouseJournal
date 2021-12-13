import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import AllView from "./components/View";

import AddProperty from "./components/AddProperty";
import Navi from "./components/Navi";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import Main from "./components/Main";

const App = () => {
  let [properties, setProperties] = useState([]);
  let [views, setViews] = useState([]);
  let [showProperty, setShowProperty] = useState(false);
  let [showView, setShowView] = useState(false);

  useEffect(() => {
    axios.get("http://192.168.18.163:3001/properties").then((response) => {
      setProperties(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://192.168.18.163:3001/views").then((response) => {
      setViews(response.data);
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Switch>
          <Route path="/properties/:id">
            <Navi
              addNew="add View"
              show={showView}
              setShow={setShowView}></Navi>
            <AllView
              show={showView}
              setShow={setShowView}
              setViews={setViews}
              views={views}
              properties={properties}
              setProperties={setProperties}></AllView>
          </Route>
          <Route path="/properties">
            <Navi
              show={showProperty}
              setShow={setShowProperty}
              addNew="add Property"></Navi>
            <Main
              properties={properties.length > 0 ? properties : null}
              views={views.length > 0 ? views : null}></Main>
            <AddProperty
              show={showProperty}
              setShow={setShowProperty}
              properties={properties}
              setProperties={setProperties}></AddProperty>
          </Route>
          <Route path="/">
            <Redirect to="properties"></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
