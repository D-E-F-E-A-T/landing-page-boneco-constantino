import styled from "styled-components";

import backgroundImage from "../../assets/background-buynow.png";

export const Container = styled.div`
  background-image: url(${backgroundImage});
  padding-top: 2.5%;
  text-align: center;
  background-color: #fff;

  width: 100%;
  max-width: 1366px;

  margin: auto;
  padding-bottom: 2.5%;
`;

export const Button = styled.button`
  padding: 1.5% 4%;
  background-color: #bc1010;
  box-shadow: 0 8px #6e0b0b;
  border: 0px;
`;

export const TextButton = styled.p`
  color: #fff;
  font-weight: bold;
`;
