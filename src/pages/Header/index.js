import React from "react";

import {
  Container,
  Title,
  Subtitle,
  Text,
  Button,
  TextButton,
  Boneco1,
  Boneco2,
} from "./styles";

// import "styles.css";

import bonecoImage1 from "../../assets/boneco-vermelho-left.png";
import bonecoImage2 from "../../assets/boneco-branco-left.png";

function Header() {
  return (
    <Container>
      <div>
        <Title>BONECO</Title>
        <Subtitle>CONSTANTINO</Subtitle>
        <Text>
          Boneco sparring usado no treino de repetições de técnicas e movimentos
          de Jiu Jitsu, MMA, Judô e outras lutas de chão.
        </Text>
        <a href="#buy">
          <Button>
            <TextButton>COMPRAR</TextButton>
          </Button>
        </a>
      </div>

      <div>
        <Boneco2 src={bonecoImage2} />
        <Boneco1 src={bonecoImage1} />
      </div>
    </Container>
  );
}

export default Header;
