import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import AllView from "./components/View";
import arrow from "./arrow.png";
import AddProperty from "./components/AddProperty";
import { Rating } from "@material-ui/lab";
import Navi from "./components/Navi";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";

const HouseCard2 = (props) => {
  console.log(props);
  return (
    <div
      className="higherHouseCard"
      style={{
        display: "flex",
        width: "min-content",
        justifySelf: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "30px",
        margin: "20px 0",
        borderRadius: "10px",
        backgroundColor: "white",
        padding: "5px",
      }}>
      <div
        className="view"
        style={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "1.68443px 2.24591px 14.0369px rgba(0, 0, 0, 0.25)",
          borderImageSlice: 1,
          borderWidth: "0.5px",
          lineHeight: 1,
          textAlign: "center",
          width: "250px",
          height: "100%",
          borderRadius: "25px",
        }}>
        <div>
          <img
            src={props.src ? props.src : "http://placehold.it/512x512"}
            style={{
              alignSelf: "center",
              height: "220px",
              width: "250px",
              boxShadow: "1.08px 1.4px 8.6px -2.1px black",
              borderTopLeftRadius: "25px",
              borderTopRightRadius: "25px",
            }}
          />
        </div>
        <div
          className="innerView"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            width: "100%",
            flex: 1,
            justifyContent: "space-between",
          }}>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "0 15px 0 15px",
            }}>
            <Rating
              name="half-rating-read"
              defaultValue={props.stars}
              precision={0.1}
              readOnly
              style={{ color: "#FBFF12" }}
            />
          </div>
          <div>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "center",
              }}>
              <p
                className="name"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  marginTop: "15px",
                  maxWidth: "200px",
                  textAlign: "center",
                  fontFamily: "Poppins",
                }}>
                {props.address}
              </p>
            </div>
          </div>
          <div className="desc" style={{ width: "100%", textAlign: "left" }}>
            <div style={{ marginBottom: "15px", display: "grid" }}>
              <p
                className="ratinger"
                style={{
                  fontSize: "20px",
                  margin: "10px",
                  backgroundColor: "white",
                  fontFamily: '"Poppins"',
                  fontWeight: 400,
                  color: "white",
                  lineHeight: "1.5",
                  maxWidth: "200px",
                  alignSelf: "center",
                  justifySelf: "center",
                  padding: "0 30px 0 30px",
                  boxShadow: "3px 3px 0px #000000",
                  borderTop: "0.1px solid rgba(0, 0, 0, 0.65)",
                  borderLeft: "0.1px solid rgba(0, 0, 0, 0.65)",
                  borderRadius: "12px",
                }}>
                <Link
                  to={`properties/${props.id}`}
                  style={{ textDecoration: "none", color: "black" }}>
                  {" "}
                  <img height={16} width={16} src={arrow} alt={"arrow"}></img>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Main = (props) => {
  if (props.properties === null || props.views === null) {
    return <p>Loading..</p>;
  }
  let newproperties = props.properties;
  const calculateRating = (views) => {
    if (newproperties == null) return;
    for (let j = 0; j < newproperties.length; j++) {
      let numerator = 0,
        denominator = 0;
      for (let i = 0; i < newproperties[j].parts.length; i++) {
        let finder = props.views.find(
          (el) =>
            el.name.toLowerCase() ===
            newproperties[j].parts[i].name.toLowerCase()
        );
        if (finder !== undefined) {
          // //console.log(finder, newproperties[j].parts[i])
          numerator +=
            parseFloat(finder.weight) *
            parseFloat(newproperties[j].parts[i].rating);
          denominator += finder.weight;
        }
      }
      if (numerator === 0 || denominator === 0) newproperties.rating = 0;
      else newproperties[j].rating = numerator / denominator;
      //console.log("rating for house ", newproperties[j].address, " is ", numerator / denominator)
    }
  };

  calculateRating();

  return (
    <div
      className="flex-container"
      style={{
        display: "grid",
        width: "80%",
        margin: "80px auto auto auto",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyContent: "space-evenly",
        justifyItems: "center",
        backgroundColor: "white",
        marginTop: "80px",
      }}>
      {newproperties
        .sort((a, b) => b.rating - a.rating)
        .map((el) => {
          return (
            <HouseCard2
              id={el._id}
              key={el._id}
              stars={el.rating}
              address={el.address}
              src={el.img}></HouseCard2>
          );
        })}
      {/* <HouseCard address="567" src="https://media.istockphoto.com/photos/single-family-new-construction-home-in-suburb-neighborhood-in-the-picture-id1147674297?k=6&m=1147674297&s=612x612&w=0&h=hgmO3-TlHfRE3pcX63T5nbrfPD07BYMR8R608MUtKco="></HouseCard> */}
    </div>
  );
};
const App = () => {
  let [properties, setProperties] = useState([]);
  let [views, setViews] = useState([]);
  let [showProperty, setShowProperty] = useState(false);
  let [showView, setShowView] = useState(false);
  // let [viewChanged, setViewChanged] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5050/properties").then((response) => {
      console.log(response.data);
      setProperties(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5050/views").then((response) => {
      //console.log(response.data);
      setViews(response.data);
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div >
        <Switch>
          <Route path="/properties/:id">
            {/*console.log("from switch of router", properties)*/}
            {/* <NavBar addNew="add View" show={showView} setShow={setShowView}></NavBar> */}
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
            {/* <NavBar show={showProperty} setShow={setShowProperty} addNew="add Property"></NavBar> */}
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
