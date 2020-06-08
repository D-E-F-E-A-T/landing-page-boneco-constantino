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
import Client6 from "../../assets/clients6.png";
import Client7 from "../../assets/clients7.png";
import Client8 from "../../assets/clients8.png";

function Clients() {
  return (
    <Container>
      <HeaderTab>
        <Title>CLIENTES:</Title>

        <a
          target="_blank"
          href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTAwMzg5MzMwMjg2NjQ5?igshid=1r5dyiihmjoe7&story_media_id=1955720756634950091_1210089117"
        >
          <Logos src={Instagram} />
        </a>
      </HeaderTab>

      <LineBar>
        <ClientImg src={Client1} />
        <ClientImg src={Client2} />
        <ClientImg src={Client7} />
        <ClientImg src={Client4} />
      </LineBar>

      <LineBar>
        <ClientImg src={Client5} />
        <ClientImg src={Client6} />
        <ClientImg src={Client3} />
        <ClientImg src={Client8} />
      </LineBar>
    </Container>
  );
}

export default Clients;
