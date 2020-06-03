import React from "react";
import { GiMedallist } from "react-icons/gi";

import {
  Container,
  Title,
  TitleFocus,
  TextBarHorizontal,
  TextBar,
  Text,
} from "./styles";

function Solution() {
  return (
    <Container>
      <Title>
        COM O<TitleFocus> BONECO CONSTANTINO </TitleFocus>
        SEUS PROBLEMAS
        <TitleFocus> ACABARAM!</TitleFocus>
      </Title>

      <TextBarHorizontal>
        <TextBar>
          <Text>- Treine quando e onde quiser.</Text>
          <Text>- Melhore suas técnicas e finalizações.</Text>
        </TextBar>

        <div>
          <GiMedallist size={110} color="#bc1010" />
        </div>

        <TextBar>
          <Text>- Treine quando e onde quiser.</Text>
          <Text>- Melhore suas técnicas e finalizações.</Text>
        </TextBar>
      </TextBarHorizontal>
    </Container>
  );
}

export default Solution;
