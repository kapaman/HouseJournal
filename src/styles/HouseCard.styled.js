import styled from "styled-components";
import backImage from "../images/back.png";
export const HouseCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1.68443px 2.24591px 14.0369px rgba(0, 0, 0, 0.25);
  border-image-slice: 1;
  border-width: 0.5px;
  line-height: 1;
  text-align: center;
  width: 250px;
  border-radius: 25px;
  margin: 20px 0;
`;

export const HouseCardImage = styled.img`
  align-self: center;
  height: 220px;
  width: 250px;
  box-shadow: 1.08px 1.4px 8.6px -2.1px black;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const HouseCardInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  flex: 1;
  justify-content: space-between;
`;

export const HouseCardAddress = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 25px;
  max-width: 200px;
  text-align: center;
  font-family: Poppins;
  justify-content: center;
  line-height: 1.5;
`;

export const HouseCardArrow = styled.p`
  font-size: 20px;
  margin: 10px;
  // border-top: 1.5px solid #304a87;
  // border-left: 1.5px solid #304a87;
  // border-bottom: 3.5px solid #304a87;
  // border-right: 3.5px solid #304a87;
  // background: rgb(0, 212, 255);
  // background: linear-gradient(
  //   90deg,
  //   rgba(0, 212, 255, 1) 0%,
  //   rgba(9, 9, 121, 1) 51%,
  //   rgba(4, 0, 69, 1) 100%
  // );
  // background: #30749f;
  display: flex;
  justify-column: center;
  align-items: center;
  font-family: "Poppins";
  font-weight: 400;
  color: white;
  // line-height: 20;
  height: 30px;
  max-width: 200px;
  align-self: center;
  justify-self: center;
  padding: 0 40px 0 40px;
  // box-shadow: 3px 3px 0px #000000;
  // border-top: 0.1px solid rgba(0, 0, 0, 0.65);
  // border-left: 0.1px solid rgba(0, 0, 0, 0.65);
  border-radius: 12px;
  // background: linear-gradient(90deg, #040046 0%, #00d4ff 100%);
  background: white;
  box-shadow: 2px 2px 5px 0px #285498;
`;
