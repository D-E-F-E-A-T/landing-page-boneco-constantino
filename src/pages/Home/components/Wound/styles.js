import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1366px;

  margin: auto;
  margin-bottom: 2.5%;
`;

export const Image = styled.img`
  width: 100vw;
  height: 20vw;
`;

export const TextBar = styled.div`
  background-color: #fff;
  padding: 2% 2% 2% 3%;
  margin: 1% 0 0 3%;
  border-radius: 10px;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #bc1010;
`;

export const Text = styled.p`
  color: #000;
  margin-top: 1%;
  font-size: 0.9rem;
  line-height: 2;
`;
