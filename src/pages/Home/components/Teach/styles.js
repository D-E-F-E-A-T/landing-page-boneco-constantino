import styled from "styled-components";

import backgroundImage from "../../../../assets/background-teach.png";

export const Container = styled.div`
  background-image: url(${backgroundImage});

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1366px;

  margin: auto;
  padding-bottom: 2.5%;
`;

export const TextBar = styled.div``;

export const Title = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: #fff;
  margin-top: 2%;
  font-size: 1.3rem;
`;

export const Text = styled.p`
  color: #fff;
  margin-top: 4%;
  font-size: 1rem;
  width: 40vw;
  line-height: 3.5;
`;

export const Button = styled.button`
  padding: 20px 80px 20px 80px;
  background-color: #bc1010;
  box-shadow: 0 10px #6e0b0b;
  border: 0px;
`;

export const TextButton = styled.p`
  color: #fff;
  font-weight: bold;
`;

export const ImageBar = styled.div``;

export const ImageMain = styled.img`
  width: 600px;
  height: 670px;
`;

export const ImageSub = styled.img`
  width: 457px;
  height: 363px;
  margin-top: -160px;
  /* margin-left: -100px; */
  z-index: -1;
`;
