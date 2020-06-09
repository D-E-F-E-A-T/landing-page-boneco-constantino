import React, { useState, useEffect } from "react";

import bonecoBranco from "../../assets/boneco-branco.png";
import bonecoVermelho from "../../assets/boneco-vermelho.png";
import bonecoCinza from "../../assets/boneco-cinza.png";
import bonecoPreto from "../../assets/boneco-preto.png";

import { FiShoppingCart } from "react-icons/fi";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { FiMinus, FiPlus } from "react-icons/fi";

import {
  Container,
  HeaderBar,
  TitleHeader,
  ContainerItens,
  BonecoBar,
  ContainerHorizontal,
  TitleBonceco,
  MenuBar,
  TitleTopBar,
  ColorTitle,
  HowMuchBar,
  MenuTopBar,
  ColorBar,
  TitleHowmuch,
  HowMuchTitle,
  BuyBar,
  BuyTitle,
  BuySubTitle,
  BuyPrice,
  BuyPriceBlack,
  Button,
  TextButton,
  BuyBarFull,
  BonecoImage,
  Icon,
  ContainerMenus,
  BuyPriceFull,
  ColorOptionBar,
  ColorOptionBar2,
  ColorOptionBar3,
  ColorOptionBar4,
  Button1,
} from "./styles";

function Buy() {
  const cores = [bonecoPreto, bonecoCinza, bonecoVermelho, bonecoBranco];
  const coresNome = ["Preto", "Cinza", "Vermelho", "Branco"];

  const [quantidade, setQuantidade] = useState(1);
  const [color, setColor] = useState([cores[0], 0, coresNome[0]]);

  function adicionarQuantidade() {
    setQuantidade(quantidade + 1);
  }

  function diminuirQuantidade() {
    if (quantidade <= 1) {
      return;
    }
    setQuantidade(quantidade - 1);
  }

  function diminuiCor() {
    const numberColor = color[1];

    if (numberColor <= 0) {
      setColor([cores[3], 3, coresNome[3]]);
      return;
    }
    setColor([
      cores[numberColor - 1],
      numberColor - 1,
      coresNome[numberColor - 1],
    ]);
  }

  function adicionaCor() {
    const numberColor = color[1];

    if (numberColor >= 3) {
      setColor([cores[0], 0, coresNome[0]]);
      return;
    }
    setColor([
      cores[numberColor + 1],
      numberColor + 1,
      coresNome[numberColor + 1],
    ]);
  }
  function colocaPreto() {
    setColor([cores[0], 0, coresNome[0]]);
  }

  function colocaCinza() {
    setColor([cores[1], 1, coresNome[1]]);
  }

  function colocaVermelho() {
    setColor([cores[2], 2, coresNome[2]]);
  }

  function colocaBranco() {
    setColor([cores[3], 3, coresNome[3]]);
  }

  return (
    <Container id="buy">
      <HeaderBar>
        <TitleHeader>FAZER PEDIDO</TitleHeader>
      </HeaderBar>

      <ContainerItens>
        <BonecoBar>
          <ContainerHorizontal>
            <Icon>
              <AiOutlineLeft size={40} color="#000" onClick={diminuiCor} />
            </Icon>
            <BonecoImage src={color[0]} />
            <Icon>
              <AiOutlineRight size={40} color="#000" onClick={adicionaCor} />
            </Icon>
          </ContainerHorizontal>
          <TitleBonceco>{color[2]}</TitleBonceco>
        </BonecoBar>

        <ContainerMenus>
          <MenuTopBar>
            <TitleTopBar>Escolher cores:</TitleTopBar>
            <ColorBar>
              <ColorOptionBar onClick={colocaPreto}>
                <ColorTitle>Preto</ColorTitle>
              </ColorOptionBar>
              <ColorOptionBar2 onClick={colocaCinza}>
                <ColorTitle>Cinza</ColorTitle>
              </ColorOptionBar2>
              <ColorOptionBar3 onClick={colocaVermelho}>
                <ColorTitle>Vermelho</ColorTitle>
              </ColorOptionBar3>
              <ColorOptionBar4 onClick={colocaBranco}>
                <ColorTitle>Branco</ColorTitle>
              </ColorOptionBar4>
            </ColorBar>

            <TitleHowmuch>Quantidade:</TitleHowmuch>
            <HowMuchBar>
              <FiMinus size={20} color="#000" onClick={diminuirQuantidade} />

              <HowMuchTitle>{quantidade}</HowMuchTitle>
              <FiPlus size={20} color="#000" onClick={adicionarQuantidade} />
            </HowMuchBar>
          </MenuTopBar>

          <MenuBar>
            <BuyBar>
              <BuyTitle>VAZIO</BuyTitle>

              <BuyPrice>
                por <BuyPriceBlack>519</BuyPriceBlack>,00
                <p>ou em 12x de 43,52</p>
              </BuyPrice>

              <Button>
                <TextButton>COMPRAR</TextButton>
                {/* <FiShoppingCart color="#fff" /> */}
              </Button>
            </BuyBar>

            <BuyBarFull>
              <BuyTitle>CHEIO</BuyTitle>
              <BuySubTitle>[Recomendado]</BuySubTitle>

              <BuyPriceFull>
                por <BuyPriceBlack>719</BuyPriceBlack>,00{" "}
                <p>ou em 12x de 66,58</p>
              </BuyPriceFull>

              <Button1>
                <TextButton>COMPRAR</TextButton>
                {/* <FiShoppingCart color="#fff" /> */}
              </Button1>
            </BuyBarFull>
          </MenuBar>
        </ContainerMenus>
      </ContainerItens>
    </Container>
  );
}

export default Buy;
