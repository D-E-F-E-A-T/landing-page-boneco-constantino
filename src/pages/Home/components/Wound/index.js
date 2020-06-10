import React from "react";

import { Container, Image, TextBar, Title, Text } from "./styles";

import ImageWound from "../../../../assets/lesaso.png";

function Wound() {
  return (
    <Container>
      <Image src={ImageWound} />

      <TextBar>
        <Title>EVITE LESÕES</Title>
        <Text>
          Com nosso Boneco, você evita se lesionar ou ser lesionado durante os
          treinos no uso das técnicas de Jiujitsu, MMA, Judô e outras lutas que
          podem ocasionar em lesões graves.
        </Text>
      </TextBar>
    </Container>
  );
}

export default Wound;
