import React from "react";

import { FaChevronDown } from "react-icons/fa";

import {
  Container,
  Title,
  AsksBar,
  LineBar,
  TitleBar,
  TitleAsk,
  AnswerBar,
  AnswerText,
} from "./styles";

function AnswerShown1() {
  document.querySelector("#shown1").classList.toggle("hide");
}

function AnswerShown2() {
  document.querySelector("#shown2").classList.toggle("hide");
}

function AnswerShown3() {
  document.querySelector("#shown3").classList.toggle("hide");
}

function AnswerShown4() {
  document.querySelector("#shown4").classList.toggle("hide");
}

function AnswerShown5() {
  document.querySelector("#shown5").classList.toggle("hide");
}

function AnswerShown6() {
  document.querySelector("#shown6").classList.toggle("hide");
}

function Asks() {
  return (
    <Container>
      <Title>DÚVIDAS FREQUENTES</Title>

      <AsksBar>
        <LineBar>
          <TitleBar onClick={AnswerShown1}>
            <TitleAsk>Como encho o meu boneco constantino?</TitleAsk>{" "}
            <FaChevronDown size={30} color="#bc1010" />
          </TitleBar>

          <AnswerBar className="hide" id="shown1">
            <AnswerText>
              Não se preocupe,você receberá na caixa um manual de enchimento do
              Boneco Constantino. O processo demanda um pouco de força e
              paciência para deixa-lo bem compacto e eficiente na aplicação das
              técnicas, portanto qualquer pessoa pode fazer o enchimento.
            </AnswerText>
          </AnswerBar>
        </LineBar>

        <LineBar>
          <TitleBar onClick={AnswerShown2}>
            <TitleAsk>Qual o prazo de entrega?</TitleAsk>{" "}
            <FaChevronDown size={30} color="#bc1010" />
          </TitleBar>

          <AnswerBar className="hide" id="shown2">
            <AnswerText>
              O prazo de entrega varia por região e o tipo de envio (cheio ou
              vazio), veja acima na opção "prazo de entrega" e selecione sua
              região para visualizar seu prazo.
            </AnswerText>
          </AnswerBar>
        </LineBar>
      </AsksBar>

      <AsksBar>
        <LineBar>
          <TitleBar onClick={AnswerShown3}>
            <TitleAsk>Quais Materiais posso encher o boneco?</TitleAsk>{" "}
            <FaChevronDown size={30} color="#bc1010" />
          </TitleBar>

          <AnswerBar className="hide" id="shown3">
            <AnswerText>
              Os materiais recomendados pela Constantino Sports são: <br /> 1)
              Retalhos de panos encontrado em redes de confecções de tecidos{" "}
              <br />
              2) Raspas de borracha encontrado em recauchutadora de pneus.{" "}
              <br />
              Obs: Areia não é recomendado pelo fato da possibilidade de
              vazamento.
            </AnswerText>
          </AnswerBar>
        </LineBar>

        <LineBar>
          <TitleBar onClick={AnswerShown4}>
            <TitleAsk>Quais os efeitos do Rejuveness Hair?</TitleAsk>{" "}
            <FaChevronDown size={30} color="#bc1010" />
          </TitleBar>

          <AnswerBar className="hide" id="shown4">
            <AnswerText>
              O Rejuveness vai ser o seu maior aliado dos seus cabelos em todos
              os momentos, porque ele potencializa o crescimento até 5X,
              deixando-os mais brilhantes, sedosos e menos quebradiços em tempo
              recorde. Deixa seu cabelo livre do frizz, repara as pontas duplas
              e combate a queda capilar até 80% porque sua fórmula exclusiva é
              fonte de vitaminas e minerais essenciais que nutrem o corpo e
              reparam os danos causados pela falta de nutrientes e pela correria
              do dia a dia. O Rejuveness Hair também vai fortalecer suas unhas,
              fazendo com que elas cresçam e fiquem muito mais resistentes e
              saudáveis. Além disso o Rejuvenesse Hair com sua fórmula exclusiva
              vai auxiliar na produção continua de colágeno deixando sua pele
              firme e forte, com aspecto mais jovem e linda.
            </AnswerText>
          </AnswerBar>
        </LineBar>
      </AsksBar>
    </Container>
  );
}

export default Asks;
