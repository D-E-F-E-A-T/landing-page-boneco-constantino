import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;

  padding: 40px;
  color: #000;

  align-items: center;

  width: 100%;
  max-width: 1366px;

  margin: auto;
  padding-bottom: 2.5%;
`;

export const Elements = styled.div`
  background-color: #f3f3f3;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  padding-right: 1%;
`;

export const ElementsHorizontal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: #000;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 2% 0 0 0;
  font-style: italic;
`;

export const TypeBar = styled.div`
  padding: 3%;
`;

export const TitleType = styled.p`
  font-size: 1.15rem;
  font-weight: bold;
  font-style: italic;
`;

export const Text = styled.p`
  margin-top: 1%;
  font-size: 0.75rem;
  line-height: 2;
`;
