import React from "react";

import {
  Container,
  HeaderTab,
  Title,
  Logos,
  LineBar,
  Client,
  ClientImg,
} from "./styles";

import Instagram from "../../assets/instagram-icons.png";

import Client1 from "../../assets/clients1.png";
import Client2 from "../../assets/clients2.png";
import Client3 from "../../assets/clients3.png";
import Client4 from "../../assets/clients4.png";
import Client5 from "../../assets/clients5.png";

function Clients() {
  return (
    <Container>
      <HeaderTab>
        <Title>CLIENTES:</Title>

        <Logos src={Instagram} />
      </HeaderTab>

      <LineBar>
        <ClientImg src={Client1} />
        <ClientImg src={Client2} />
        <ClientImg src={Client3} />
        <ClientImg src={Client4} />
      </LineBar>

      <LineBar>
        <ClientImg src={Client5} />
        <Client />
        <Client />
        <Client />
      </LineBar>
    </Container>
  );
}

export default Clients;
