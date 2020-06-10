import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #fff;

  width: 100%;
  max-width: 1366px;

  margin: auto;
  padding-top: 7%;
  padding-bottom: 5%;
`;

export const Title = styled.p`
  color: #bc1010;
  font-weight: 500;
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
  padding-right: -50%;
  padding-left: -50%;
  margin-left: 35px;
  margin-right: 35px;
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #000;
  padding-right: 5%;
  border-radius: 5px 5px 0px 0px;
  -moz-border-radius: 5px 5px 0px 0px;
  -webkit-border-radius: 5px 5px 0px 0px;
`;

export const TitleAsk = styled.p`
  color: #000;
  font-weight: 300;
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
