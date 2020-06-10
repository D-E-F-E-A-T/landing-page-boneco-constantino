import React from "react";

import { Container, Image, Text } from "./styles";

import DislikeImage from "../../../../assets/dislike.png";

function Dissatisfied() {
  return (
    <Container>
      <div>
        <Image src={DislikeImage} />
      </div>

      <div>
        <Text>Você está insatisfeito com sua luta?</Text>
        <Text>
          Está perdendo clientes na sua academia e não sabe o por que?
        </Text>
        <Text>Você se lesiona muito nos treino ?</Text>
        <Text>Gostaria de treinar, mas a academia está fechada?</Text>
        <Text>
          Seu parceiro de treino não aguenta 100, 50 ou até mesmo 25 repetições
          ?
        </Text>
      </div>
    </Container>
  );
}

export default Dissatisfied;
