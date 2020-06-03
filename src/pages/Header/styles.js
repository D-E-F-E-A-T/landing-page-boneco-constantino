import styled from "styled-components";
import backgroundImage from "../../assets/background-header.png";

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

export const Title = styled.h1`
  margin: 20% 0 0 4%;
  color: #bc1010;
  font-size: 4rem;
`;

export const Subtitle = styled.h2`
  margin-left: 4%;
  font-size: 3rem;
  margin-top: -4%;
`;

export const Text = styled.p`
  font-size: 1rem;
  max-width: 800px;
  margin: 5% 0 0 0;
  margin-left: 4%;
`;

export const Button = styled.button`
  margin: 5% 0 0 0;
  padding: 2.5% 12%;
  background-color: #bc1010;
  box-shadow: 0 1vh #6e0b0b;
  border: 0px;
  margin-left: 4%;
`;

export const TextButton = styled.p`
  color: #fff;
  font-weight: bold;
`;

export const Boneco1 = styled.img`
  margin: 15% 0 -30% 0;
  height: 30vw;
  z-index: 10;
  margin-right: 5vw;

  max-width: 300px;
  max-height: 500px;
`;

export const Boneco2 = styled.img`
  margin: 15% 0 -7% 0;
  height: 25vw;
  margin-right: -7vw;

  max-width: 260px;
  max-height: 380px;
`;
