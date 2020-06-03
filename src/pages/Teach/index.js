import React from "react";

import ClientsImage from "../../assets/clients.png";

import {
  Container,
  TextBar,
  Title,
  Subtitle,
  Text,
  Button,
  TextButton,
  ImageBar,
  ImageMain,
  ImageSub,
} from "./styles";

function Teach() {
  return (
    <Container>
      <TextBar>
        <Title>MINISTRE SUAS AULAS!</Title>
        <Subtitle>Você tem academia ou oferece aulas?</Subtitle>
        <Text>
          Seja inovador em sua academia! Com o nosso Boneco Constantino você
          pode fazer várias demonstrações de técnicas e movimentos para seus
          alunos, com isso sua academia e sua aula pode ser mais dinâmica. Sendo
          assim com a utilização do Boneco Constantino você evita a perda de
          alunos.
        </Text>

        <Button>
          <TextButton>COMPRAR AGORA</TextButton>
        </Button>
      </TextBar>

      <ImageBar>
        <ImageMain src={ClientsImage} />
      </ImageBar>
    </Container>
  );
}

export default Teach;
