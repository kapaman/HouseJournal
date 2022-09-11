import React from "react";
import { Heading, Para, SideImage } from "../styles/About.styled";
import { OverViewWrapper } from "../styles/AllView.styled";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

const About = () => {
  return (
    <div style={{ maxWidth: "1100px", width: "92%", margin: "auto" }}>
      <OverViewWrapper style={{ marginBottom: "2rem" }}>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <Heading style={{ marginTop: "3rem" }}>What is HouseJournal?</Heading>
          <Para>
            HouseJournal is a tool to help you decide which property to
            buy/invest in. When presented with a lot of choices, a person gets
            confused on which property/house would be best for them.
            HouseJournal solves this confusion by letting you rate each part of
            the house and selecting the best.
          </Para>
          <Heading style={{ marginTop: "3rem" }}>How does it work?</Heading>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3rem",
            }}
          >
            <Para maxWidth="60%">
              When you visit a new house. Add the house to HouseJournal along
              with some details such as the price, area etc.
            </Para>
            <SideImage src={image1} width={300} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <SideImage src={image2} width={400} />
            <Para maxWidth="60%">
              Click on the newly added property and start adding the parts of
              the house you want.
            </Para>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "3rem",
            }}
          >
            <Para maxWidth="60%">
              HouseJournal provides you with the overall ratings of all the
              houses in a sorted order.
            </Para>
            <SideImage src={image3} width={400} />
          </div>
        </div>
      </OverViewWrapper>
    </div>
  );
};

export default About;
