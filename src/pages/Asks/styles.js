import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #fff;

  width: 100%;
  max-width: 1366px;

  margin: auto;
  padding-top: 15%;
  padding-bottom: 20%;
`;

export const Title = styled.p`
  color: #bc1010;
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  padding: 30px;
`;

export const AsksBar = styled.div`
  margin-top: 3%;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
`;

export const LineBar = styled.div`
  width: 45%;
  margin-left: 35px;
  margin-right: 35px;
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #bc1010;
  padding-right: 5%;
`;

export const TitleAsk = styled.p`
  color: #bc1010;
  font-weight: bold;
`;

export const AnswerBar = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
  /* display: none; */
`;

export const AnswerText = styled.p`
  font-size: 0.8rem;
  color: #555555;
  line-height: 1.8;
`;
