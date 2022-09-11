import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import { HouseCardContainer } from "../styles/AllView.styled";
import HouseCard2 from "./HouseCard";

const Main = () => {
  const { properties, views } = useContext(DataContext);
  if (properties?.length !== 0 && views?.length !== 0) {
    let newproperties = properties;

    const calculateRating = () => {
      if (newproperties == null) return;
      for (let j = 0; j < newproperties.length; j++) {
        let numerator = 0,
          denominator = 0;
        for (let i = 0; i < newproperties[j].parts.length; i++) {
          let finder = views.find(
            (el) =>
              el.name.toLowerCase() ===
              newproperties[j].parts[i].name.toLowerCase()
          );
          if (finder !== undefined) {
            numerator +=
              parseFloat(finder.weight) *
              parseFloat(newproperties[j].parts[i].rating);
            denominator += finder.weight;
          }
        }
        if (numerator === 0 || denominator === 0) newproperties[j].rating = 0;
        else newproperties[j].rating = numerator / denominator;
      }
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
                src={el.img}
              ></HouseCard2>
            );
          })}
      </HouseCardContainer>
    );
  }

  return (
    <p
      style={{
        fontSize: "1.1rem",
        textAlign: "center",
        fontFamily: "Poppins",
        maxWidth: "1100px",
        width: "92%",
        margin: "auto",
        marginTop: "6rem",
      }}
    >
      Fetching Content...
    </p>
  );
};

export default Main;
