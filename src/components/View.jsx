import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootContainer } from "../styles/AllView.styled";
import AddView from "./AddView";
import OverViewDesigned from "./OverView";
import PartView from "./Parts";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../App";

const AllViews = (props) => {
  const id = useParams().id.toString();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { properties, setProperties } = useContext(DataContext);
  useEffect(() => {
    const selectedProp = properties.find((el) => el._id === id);

    if (!selectedProp) return;

    if (
      selectedProp.parts.length > 0 &&
      selectedProp.parts[0].img === undefined
    ) {
      axios
        .get(`https://house-journal-backend.herokuapp.com/properties/${id}`)
        .then((response) => {
          let propertyWithImage = properties.map((el) =>
            el._id === id ? response.data[0] : el
          );
          setProperties(propertyWithImage);
          setSelectedProperty(response.data[0]);
        });
    } else {
      setSelectedProperty(selectedProp);
    }
  }, [props, id, properties, setProperties]);

  return (
    <RootContainer>
      <OverViewDesigned
        id={id}
        selectedProperty={selectedProperty}></OverViewDesigned>
      <PartView id={id} selectedProperty={selectedProperty}></PartView>
      <AddView
        setSelectedProperty={setSelectedProperty}
        selectedProperty={selectedProperty}></AddView>
    </RootContainer>
  );
};

export default AllViews;
