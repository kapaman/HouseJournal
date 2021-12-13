import React from "react";
import {
  PartDesc,
  PartRating,
  PartsContainer,
  PartsWrapper,
  PartThumbnail,
  PartTitle,
  PartUpperRow,
  PartViewInner,
} from "../styles/AllView.styled";

const PartView = (props) => {
  if (props.properties === null) {
    return <p>Loading...</p>;
  }

  let sortedParts = props.properties.find(
    (el) => el._id.toString() === props.id.toString()
  ).parts;
  sortedParts.sort((a, b) => {
    return b.rating - a.rating;
  });
  console.log(sortedParts);
  if (sortedParts.length > 0) {
    return (
      <PartsContainer className="flex-container2">
        {sortedParts.length > 0 &&
          sortedParts.map((el, i) => (
            <Parts
              key={i}
              src={el.img}
              description={el.description}
              stars={el.rating}
              title={el.name}></Parts>
          ))}
      </PartsContainer>
    );
  } else {
    return (
      <p style={{ marginTop: "50px", fontFamily: "Poppins", textAlign: "center" }}>
        No views to show... Start adding Views
      </p>
    )

  }

};

const Parts = (props) => {
  if (props.title) {
    return (
      <PartsWrapper className="view" id="viewId">
        <PartThumbnail
          className="img"
          src={props.src ? props.src : "http://placehold.it/512x512"}
        />
        <PartViewInner className="innerView">
          <PartUpperRow>
            <PartTitle className="name" id="viewIdName">
              {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
            </PartTitle>

            <PartRating className="rating ratingid">
              {props.stars}
              <svg
                style={{ marginLeft: "4px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </PartRating>
          </PartUpperRow>
          <PartDesc className="description desc">{props.description}</PartDesc>
        </PartViewInner>
      </PartsWrapper>
    );
  } else {
    return <h1>Loading..</h1>;
  }
};

export default PartView;
