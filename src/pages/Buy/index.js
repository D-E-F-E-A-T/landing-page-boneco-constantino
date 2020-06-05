import React from "react";

import bonecoBranco from "../../assets/boneco-branco.png";
import bonecoVermelho from "../../assets/boneco-vermelho.png";
import bonecoCinza from "../../assets/boneco-cinza.png";
import bonecoPreto from "../../assets/boneco-preto.png";

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
} from "./styles";

function Buy() {
  return (
    <Container>
      <HeaderBar>
        <TitleHeader>FAZER PEDIDO</TitleHeader>
      </HeaderBar>

      <ContainerItens>
        <BonecoBar>
          <ContainerHorizontal>
            <Icon>
              <AiOutlineLeft size={40} color="#000" />
            </Icon>
            <BonecoImage src={bonecoBranco} />
            <Icon>
              <AiOutlineRight size={40} color="#000" />
            </Icon>
          </ContainerHorizontal>
          <TitleBonceco>Branco</TitleBonceco>
        </BonecoBar>

        <ContainerMenus>
          <MenuTopBar>
            <TitleTopBar>Escolher cores:</TitleTopBar>
            <ColorBar>
              <ColorOptionBar>
                <ColorTitle>Preto</ColorTitle>
              </ColorOptionBar>
              <ColorOptionBar2>
                <ColorTitle>Cinza</ColorTitle>
              </ColorOptionBar2>
              <ColorOptionBar3>
                <ColorTitle>Vermelho</ColorTitle>
              </ColorOptionBar3>
              <ColorOptionBar4>
                <ColorTitle>Branco</ColorTitle>
              </ColorOptionBar4>
            </ColorBar>

            <TitleHowmuch>Quantidade:</TitleHowmuch>
            <HowMuchBar>
              <FiMinus size={20} color="#000" />
              <HowMuchTitle>4</HowMuchTitle>
              <FiPlus size={20} color="#000" />
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
              </Button>
            </BuyBar>

            <BuyBarFull>
              <BuyTitle>CHEIO</BuyTitle>
              <BuySubTitle>[Recomendado]</BuySubTitle>

              <BuyPriceFull>
                por <BuyPriceBlack>719</BuyPriceBlack>,00{" "}
                <p>ou em 12x de 66,58</p>
              </BuyPriceFull>

              <Button>
                <TextButton>COMPRAR</TextButton>
              </Button>
            </BuyBarFull>
          </MenuBar>
        </ContainerMenus>
      </ContainerItens>
    </Container>
  );
}

export default Buy;
