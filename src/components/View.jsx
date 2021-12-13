import React from "react";
import { useParams } from "react-router-dom";
import { RootContainer } from "../styles/AllView.styled";
import AddView from "./AddView";
import OverViewDesigned from "./OverView";
import PartView from "./Parts";

const AllViews = (props) => {
  const id = useParams().id;
  console.log(props, "from allviews sending to overviewdseigned");
  return (
    <RootContainer>
      <OverViewDesigned
        id={id}
        properties={props.properties.length > 0 ? props.properties : null}
        views={props.views.length > 0 ? props.views : null}></OverViewDesigned>
      <PartView
        id={id}
        properties={
          props.properties.length > 0 ? props.properties : null
        }></PartView>
      <AddView
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
