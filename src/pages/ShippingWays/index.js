import React from "react";

import {
  Container,
  Elements,
  ElementsHorizontal,
  Title,
  TypeBar,
  TitleType,
  Text,
} from "./styles";

function ShippingWays() {
  return (
    <Container>
      <Elements>
        <Title>FORMAS DE ENVIO</Title>

        <ElementsHorizontal>
          <TypeBar>
            <TitleType>VAZIO</TitleType>
            <Text>
              É uma opção de envio que você pode escolher ao comprar o boneco
              Constantino, enviamos o boneco vazio sem preenchimento, na qual o
              processo de preenchimento é realizado pelo comprador. Não se
              preocupe, você receberá um manual que irá te auxiliar e de quais
              materiais utilizar.
            </Text>
          </TypeBar>

          <TypeBar>
            <TitleType>CHEIO</TitleType>
            <Text>
              É a opção de compra mais recomendada pois você recebera o boneco
              constantino pronto para ser utilizado. Fazemos todo o trabalho de
              preenchimento, no qual usamos profissionais qualificados para
              tornar seu treino mais eficiente.
            </Text>
          </TypeBar>
        </ElementsHorizontal>
      </Elements>
    </Container>
  );
}

export default ShippingWays;
