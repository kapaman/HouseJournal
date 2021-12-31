import React from "react";
import { HouseCardContainer } from "../styles/AllView.styled";
import HouseCard2 from "./HouseCard";

const Main = (props) => {
  if (props.properties === null || props.views === null) {
    return <p style={{ fontSize: "1.1rem", textAlign: "center", fontFamily: "Poppins", maxWidth: "1100px", width: '92%', margin: 'auto', marginTop: '6rem', }}>Fetching Content...</p>;
  }
  console.log(props);
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
      if (numerator === 0 || denominator === 0) newproperties[j].rating = 0;
      else newproperties[j].rating = numerator / denominator;
      //console.log("rating for house ", newproperties[j].address, " is ", numerator / denominator)
    }
    // console.log(newproperties.sort((a, b) => b.rating !== undefined ? b.rating : 0 - a.rating !== undefined ? a.rating : 0));
  };

  calculateRating();

  return (
    <HouseCardContainer className="flex-container">
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
    </HouseCardContainer>
  );
};

export default Main;
