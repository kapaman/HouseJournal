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
import About from "./components/About";

const App = () => {
  let [properties, setProperties] = useState([]);
  let [views, setViews] = useState([]);
  let [showProperty, setShowProperty] = useState(false);
  let [showView, setShowView] = useState(false);

  useEffect(() => {
    axios.get("https://whats-good-backend-kapaman.vercel.app/properties").then((response) => {
      setProperties(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://whats-good-backend-kapaman.vercel.app/views").then((response) => {
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
          <Route path="/about">
            <Navi
              setShow={setShowProperty}
              addNew="add Property"></Navi>
            <About />
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
