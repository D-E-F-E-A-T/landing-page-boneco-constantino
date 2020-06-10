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
            <FaChevronDown size={30} color="#000" />
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
            <FaChevronDown size={30} color="#000" />
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
            <FaChevronDown size={30} color="#000" />
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
            <TitleAsk>O que eu posso treinar no boneco?</TitleAsk>{" "}
            <FaChevronDown size={30} color="#000" />
          </TitleBar>

          <AnswerBar className="hide" id="shown4">
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
          <TitleBar onClick={AnswerShown5}>
            <TitleAsk>Ele fica em pé? É articulado?</TitleAsk>{" "}
            <FaChevronDown size={30} color="#000" />
          </TitleBar>

          <AnswerBar className="hide" id="shown5">
            <AnswerText>
              O Boneco Constantino não fica em pé e também não é articulado. O
              constantino é fixo pois simula o fortalecimento de uma pessoa
              quando resiste uma técnica ou finalização, sendo assim, mais
              eficiente para o treinamento.
            </AnswerText>
          </AnswerBar>
        </LineBar>

        <LineBar>
          <TitleBar onClick={AnswerShown6}>
            <TitleAsk>
              O boneco pode ser usado para quais artes marciais?
            </TitleAsk>{" "}
            <FaChevronDown size={30} color="#000" />
          </TitleBar>

          <AnswerBar className="hide" id="shown6">
            <AnswerText>
              O Boneco Constantino é recomendado para lutas de chão como
              JiuJitsu, MMA, e até mesmo para judô, também é usado como saco de
              pancadas no Boxe e Muay Thai.
            </AnswerText>
          </AnswerBar>
        </LineBar>
      </AsksBar>
    </Container>
  );
}

export default Asks;
