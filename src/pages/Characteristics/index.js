import React from "react";

import KG from "../../assets/Kg.png";
import Escudo from "../../assets/Escudo.png";
import Garantia from "../../assets/Garantia.png";
import Frete from "../../assets/Frete-grátis.png";
import Prof from "../../assets/Professores-e-Alunos.png";

import {
  Container,
  Title,
  CharactericBar,
  TitleCharacteric,
  SubTitle,
  IconImage,
  CharactericsBar,
  SecondContainer,
} from "./styles";

function Characteristics() {
  return (
    <Container>
      <SecondContainer>
        <Title>CARACTERÍSTICAS</Title>
        <CharactericsBar>
          <CharactericBar>
            <IconImage src={KG} />
            <TitleCharacteric>até 45 Kilos</TitleCharacteric>
            <SubTitle>(depende do material no enchimento)</SubTitle>
          </CharactericBar>

          <CharactericBar>
            <IconImage src={Escudo} />

            <TitleCharacteric>Couro Sintético</TitleCharacteric>
            <SubTitle>(resistente até duas tonaldas)</SubTitle>
          </CharactericBar>

          <CharactericBar>
            <IconImage src={Garantia} />
            <TitleCharacteric>Garantia de 2 anos</TitleCharacteric>
            <SubTitle></SubTitle>
          </CharactericBar>

          <CharactericBar>
            <IconImage src={Frete} />
            <TitleCharacteric>Frete Grátis</TitleCharacteric>
            <SubTitle></SubTitle>
          </CharactericBar>

          <CharactericBar>
            <IconImage src={Prof} />
            <TitleCharacteric>Usado por alunos e professores</TitleCharacteric>
            <SubTitle></SubTitle>
          </CharactericBar>
        </CharactericsBar>
      </SecondContainer>
    </Container>
  );
}

export default Characteristics;
