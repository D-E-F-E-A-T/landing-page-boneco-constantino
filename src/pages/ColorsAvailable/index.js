import React from "react";

import {
  Container,
  Title,
  BonecosBar,
  BonecoBar,
  BonecoVermelho,
  TitleBonecoVermelho,
  BonecoBranco,
  TitleBonecoBranco,
  BonecoCinza,
  TitleBonecoCinza,
  BonecoPreto,
  TitleBonecoPreto,
} from "./styles";

import bonecoBranco from "../../assets/boneco-branco.png";
import bonecoVermelho from "../../assets/boneco-vermelho.png";
import bonecoCinza from "../../assets/boneco-cinza.png";
import bonecoPreto from "../../assets/boneco-preto.png";

function ColorsAvailable() {
  return (
    <Container>
      <Title>CORES DISPONIVEIS</Title>

      <BonecosBar>
        <BonecoBar>
          <BonecoVermelho src={bonecoVermelho} />
          <TitleBonecoVermelho>VERMELHO</TitleBonecoVermelho>
        </BonecoBar>

        <BonecoBar>
          <BonecoBranco src={bonecoBranco} />
          <TitleBonecoBranco>BRANCO</TitleBonecoBranco>
        </BonecoBar>

        <BonecoBar>
          <BonecoCinza src={bonecoCinza} />
          <TitleBonecoCinza>CINZA</TitleBonecoCinza>
        </BonecoBar>

        <BonecoBar>
          <BonecoPreto src={bonecoPreto} />
          <TitleBonecoPreto>PRETO</TitleBonecoPreto>
        </BonecoBar>
      </BonecosBar>
    </Container>
  );
}

export default ColorsAvailable;
