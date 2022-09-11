import styled from "styled-components";

export const Heading = styled.p`
  font-weight: 700;
  font-size: 25px;
  margin-top: 2rem;
`;

export const Para = styled.p`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 20px;
  color: #888;
  text-align: center;
  margin: auto 2rem;
  max-width: ${(props) => props.maxWidth};
  line-height: 130%;
`;
export const SideImage = styled.img`
  max-width: ${(props) => props.width + "px"};
  height: auto;
`;
