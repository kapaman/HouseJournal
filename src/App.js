import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import AllViews from "./components/View";

import AddProperty from "./components/AddProperty";
import Navi from "./components/Navi";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import Main from "./components/Main";
import About from "./components/About";
import { createContext } from "react";

export const DataContext = createContext();
const App = () => {
  let [properties, setProperties] = useState([]);
  let [views, setViews] = useState([]);
  let [showProperty, setShowProperty] = useState(false);
  let [showView, setShowView] = useState(false);

  const contextValue = {
    showView,
    setShowView,
    setViews,
    views,
    properties,
    setProperties,
    showProperty,
    setShowProperty,
  };

  useEffect(() => {
    axios
      .get("https://whats-good-backend-kapaman.vercel.app/properties")
      .then((response) => {
        setProperties(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://whats-good-backend-kapaman.vercel.app/views")
      .then((response) => {
        setViews(response.data);
      });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div>
        <DataContext.Provider value={contextValue}>
          <Switch>
            <Route path="/properties/:id">
              <Navi addNew="add view"></Navi>
              <AllViews></AllViews>
            </Route>
            <Route path="/properties">
              <Navi addNew="add Property"></Navi>
              <Main></Main>
              <AddProperty></AddProperty>
            </Route>
            <Route path="/about">
              <Navi addNew="about"></Navi>
              <About />
            </Route>
            <Route path="/">
              <Redirect to="properties"></Redirect>
            </Route>
          </Switch>
        </DataContext.Provider>
      </div>
    </Router>
  );
};

export default App;
