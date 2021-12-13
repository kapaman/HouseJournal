import React from "react";

import bed from "../images/bed.png";
import bathroom from "../images/bathtube.png";
import area from "../images/map.png";
import {
  AddressHeading,
  BottomRow,
  IconGroup,
  IconWrapper,
  OverViewWrapper,
  Rating,
  UpperRow,
} from "../styles/AllView.styled";

const OverViewDesigned = (props) => {
  console.log("from overView designed ", props);
  if (props.properties == null || props.views == null) return <p>Loading...</p>;

  let newproperties = props.properties.find(
    (el) => (el._id).toString() === (props.id).toString()
  );
  const calculateRating = (views) => {
    let numerator = 0,
      denominator = 0;
    //console.log("from calculate rating XDD",newproperties);
    for (let i = 0; i < newproperties.parts.length; i++) {
      let finder = props.views.find(
        (el) =>
          el.name.toLowerCase() === newproperties.parts[i].name.toLowerCase()
      );
      if (finder !== undefined) {
        // //console.log(finder, newproperties[j].parts[i])
        numerator +=
          parseFloat(finder.weight) * parseFloat(newproperties.parts[i].rating);
        denominator += finder.weight;
      }
    }
    if (numerator === 0 || denominator === 0) {
      //console.log('error');
      newproperties.rating = 0;
    } else newproperties.rating = (numerator / denominator).toFixed(1);
    console.log("rating for house ", newproperties.address, " is ", numerator / denominator)
  };

  calculateRating();

  let selectedProp = props.properties.find(
    (el) => el._id.toString() === props.id.toString()
  );
  console.log("loool", selectedProp);

  return (
    <OverViewWrapper className="innerView">
      <UpperRow>
        <AddressHeading className="name nameoverview">
          {selectedProp.address}
        </AddressHeading>
        <Rating className="rating">
          {!isNaN(newproperties.rating) ? newproperties.rating : 0}
          <svg
            style={{ marginLeft: "4px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </Rating>
        {/* </div> */}
      </UpperRow>
      <BottomRow>
        <IconGroup className="desc1">
          <IconWrapper className="description">
            <img height={24} width={24} src={bed} alt="beds"></img>{" "}
            <p>{selectedProp.beds}</p>{" "}
            <img alt="bathrooms" height={28} width={28} src={bathroom}></img>{" "}
            <p>{selectedProp.bathrooms}</p>{" "}
            <img alt="area" height={24} width={24} src={area}></img>{" "}
            <p>{selectedProp.area.toLocaleString()} sqft</p>
          </IconWrapper>
        </IconGroup>
        <span
          className="price"
          style={{
            fontFamily: '"IBM Plex Mono"',
            fontWeight: 600,
            fontSize: "18px",
            marginRight: "35px",
          }}>
          {selectedProp.price}
        </span>
      </BottomRow>
    </OverViewWrapper>
  );
};

export default OverViewDesigned;
