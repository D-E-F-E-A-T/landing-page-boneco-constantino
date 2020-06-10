import styled from "styled-components";

import backgroundImage from "../../../../assets/Icones-Redes-Sociais-2.png";

export const Container = styled.div`
  background-image: url(${backgroundImage});

  width: 100%;
  max-width: 1300px;

  margin: auto;
  padding-bottom: 6%;
  padding-top: 2%;
`;

export const HeaderTab = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-top: 30px;
  margin-left: 10%;
`;

export const Logos = styled.img``;

export const LineBar = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const Client = styled.div`
  background-color: #fff;
  width: 272px;
  height: 272px;
  margin: 0 10px 0 10px;
`;

export const ClientImg = styled.img`
  background-color: #fff;
  width: 272px;
  height: 272px;
  margin: 0 10px 0 10px;
`;
