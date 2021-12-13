import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import arrow from "../images/arrow.png";
import {
  HouseCardAddress,
  HouseCardArrow,
  HouseCardImage,
  HouseCardInnerWrapper,
  HouseCardWrapper,
} from "../styles/HouseCard.styled";

const HouseCard2 = (props) => {
  return (
    <HouseCardWrapper className="view">
      <HouseCardImage
        src={props.src ? props.src : "http://placehold.it/512x512"}
      />

      <HouseCardInnerWrapper className="innerView">
        <Rating
          name="half-rating-read"
          defaultValue={props.stars}
          precision={0.1}
          readOnly
          style={{
            color: "#FBFF12",
            marginTop: "15px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "0 15px 0 15px",
          }}
        />

        <HouseCardAddress className="name">{props.address}</HouseCardAddress>

        <div
          style={{
            marginBottom: "15px",
            display: "grid",
            justifyContent: "center",
          }}>
          <Link
            to={`properties/${props.id}`}
            style={{ textDecoration: "none", color: "black" }}>
            <HouseCardArrow className="ratinger">
              <img height={16} width={16} src={arrow} alt={"arrow"}></img>
            </HouseCardArrow>
          </Link>
        </div>
      </HouseCardInnerWrapper>
    </HouseCardWrapper>
  );
};

export default HouseCard2;
