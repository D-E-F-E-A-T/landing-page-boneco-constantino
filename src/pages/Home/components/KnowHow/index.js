import React from "react";

import { Container, TextsBar, Title, Text, ImageBar, Image } from "./styles";

import brainImage from "../../../../assets/brain.png";

function KnowHow() {
  return (
    <Container>
      <TextsBar>
        <Title>
          <strong>Melhore o desempenho</strong> nos treinos através da
          repetição;
        </Title>
        <Text>
          Imagine se você pudesse encontrar uma maneira de repetir os movimentos
          quantas vezes quiser sem cansar, lesionar ou ser lesionado por seu
          parceiro de luta e treinar a qualquer momento que desejar. Na compra
          do Boneco você <strong>acaba com esse problema.</strong>
        </Text>

        <Title>Saiba como a memória muscular pode ajudar na sua luta;</Title>
        <Text>
          A memória muscular é muito importante na luta e durante seus
          treinamentos. Ela consiste na memória de uma tarefa específica através
          da repetição, podendo ter um melhor desempenho durante a aplicação de
          técnicas e movimentos. Com o treinamento com o nosso Boneco
          Constantino você terá o aperfeiçoamento da memória muscular, e isso é
          fato que sua luta irá evoluir.
        </Text>
      </TextsBar>

      <ImageBar>
        <Image src={brainImage} />
      </ImageBar>
    </Container>
  );
}

export default KnowHow;
