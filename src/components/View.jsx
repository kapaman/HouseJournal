import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootContainer } from "../styles/AllView.styled";
import AddView from "./AddView";
import OverViewDesigned from "./OverView";
import PartView from "./Parts";
import axios from "axios";
const AllViews = (props) => {
  const id = useParams().id.toString();
  const [selectedProperty, setSelectedProperty] = useState(null);



  useEffect(() => {
    const selectedProp = props.properties.find(el => el._id === id);
    if (selectedProp) {
      if (selectedProp.parts.length > 0 && selectedProp.parts[0].img === undefined) {
        axios.get("https://whats-good-backend-kapaman.vercel.app/properties/" + id).then((response) => {
          let propertyWithImage = props.properties.map(el => el._id === id ? response.data[0] : el);
          props.setProperties(propertyWithImage);
          setSelectedProperty(response.data[0]);
        });
      } else {
        setSelectedProperty(selectedProp);
      }
    }

  });
  console.log(selectedProperty)
  console.log(props, "from allviews sending to overviewdseigned");
  return (
    <RootContainer>
      <OverViewDesigned
        id={id}
        selectedProperty={selectedProperty}
        properties={props.properties.length > 0 ? props.properties : null}
        views={props.views.length > 0 ? props.views : null}></OverViewDesigned>
      <PartView
        id={id}
        selectedProperty={selectedProperty}
        properties={
          props.properties.length > 0 ? props.properties : null
        }></PartView>
      <AddView
        setSelectedProperty={setSelectedProperty}
        selectedProperty={selectedProperty}
        show={props.show}
        setShow={props.setShow}
        views={props.views.length > 0 ? props.views : null}
        properties={props.properties.length > 0 ? props.properties : null}
        setProperties={
          props.setProperties.length > 0 ? props.setProperties : null
        }
        setViews={props.setViews ? props.setViews : null}></AddView>
    </RootContainer>
  );
};

export default AllViews;
