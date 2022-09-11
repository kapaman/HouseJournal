import styled from "styled-components";
import backImage from "../images/back.png";
export const RootContainer = styled.div`
  max-width: 1100px;
  width: 92%;
  margin: auto;
`;

export const OverViewWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  border-radius: 20px;
  display: flex;
  border: 0.5px solid #aeaeae;
  border-imageslice: 1;
  border-width: 0.5px;
  line-height: 1;
  text-align: center;
  box-shadow: 0px 5.29065px 42.3252px rgba(26, 19, 70, 0.12);
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1;
  justify-content: space-between;
`;

export const UpperRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;
`;

export const AddressHeading = styled.p`
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  font-size: 22px;
  margin-top: 40px;
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-top: 40px;
  background-image: url(${backImage});
  font-family: "Poppins";
  font-weight: 400;
  color: white;
  padding: 0 30px 0 30px;
  border-radius: 10px;
  line-height: 1.5;
  // background: rgb(0, 212, 255);
  // background: linear-gradient(
  //   90deg,
  //   rgba(0, 212, 255, 1) 0%,
  //   rgba(9, 9, 121, 1) 51%,
  //   rgba(4, 0, 69, 1) 100%
  // );
  background: rgb(86, 193, 255);
  background: linear-gradient(
    90deg,
    rgba(86, 193, 255, 1) 0%,
    rgba(4, 0, 73, 1) 95%
  );
`;

export const BottomRow = styled.div`
  display: flex;
  text-align: space-between;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;
`;

export const IconGroup = styled.div`
  width: inherit;
  margin: 0 25px;
  text-align: left;
`;

export const IconWrapper = styled.p`
  font-family: Poppins;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr auto;
  font-size: 16px;
  column-gap: 4px;
  font-weight: 200;
  line-height: 1.5;
  @media (max-width: 420px) {
    font-size: 12px;
  }
`;

export const PartsWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 0px transparent;
  border-image-slice: 1;
  border-width: 0.5px;
  border-image-source: linear-gradient(to bottom, white, rgba(0, 0, 0, 0.4));
  line-height: 1;
  text-align: center;
  font-size: 30px;
  border-radius: 23px;
  background-color: white;
  padding: 1px;
  background-image: linear-gradient(white, white),
    linear-gradient(#fff, #8b8b8b);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px 5.29065px 42.3252px rgba(26, 19, 70, 0.12);
`;

export const PartThumbnail = styled.img`
  align-self: center;
  border-radius: 50%;
  margin: 12px 10px 12px 10px;
  height: 100px;
  width: 100px;
  box-shadow: 1.08px 1.4px 8.6px -2.1px black;
`;

export const PartViewInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  flex: 1;
  justify-content: flex-start;
`;

export const PartUpperRow = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  align-items: center;
`;

export const PartTitle = styled.p`
  text-align: left;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  margin: auto 0;
`;

export const PartRating = styled.p`
  justify-self: center;
  justify-contetn: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 16px;
  background-image: url(${backImage});
  font-family: "Poppins";
  font-weight: 500;
  color: white;
  padding: 1px 25px;
  border-radius: 10px;
  line-height: 1.5;
  text-align: center;
  margin: auto 0;
  // background: rgb(0, 212, 255);
  // background: linear-gradient(
  //   90deg,
  //   rgba(0, 212, 255, 1) 0%,
  //   rgba(9, 9, 121, 1) 51%,
  //   rgba(4, 0, 69, 1) 100%
  // );
  background: rgb(86, 193, 255);
  background: linear-gradient(
    90deg,
    rgba(86, 193, 255, 1) 0%,
    rgba(4, 0, 73, 1) 95%
  );
  background: white;
  color: black;
  // border-bottom: 3px solid #285498;
  // border-left: 1px solid #285498;
  // border-right: 3px solid #285498;
  // border-top: 1px solid #285498;
  box-shadow: 2px 2px 5px 0px #285498;
}
`;

export const PartDesc = styled.p`
  color: #464646;
  // width: calc(100% -30px);
  font-family: "Poppins";
  font-size: 15px;
  font-weight: 200;
  line-height: 1.5;
  text-align: left;
  padding: 0 15px;
  margin-top: 10px;
`;

export const PartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 25px;
  column-gap: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
`;

export const HouseCardContainer = styled.div`
  display: grid;
  max-width: 1100px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;
  justify-items: center;
  background-color: white;
`;
