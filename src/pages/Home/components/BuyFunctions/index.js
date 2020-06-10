import React, { useState, useEffect } from "react";

import "./styles.css";
import formasdepagamento from "../../../../assets/Formas-de-pagamento.png";

function BuyFunctions() {
  const [praze, setPraze] = useState(0);
  const [entrega, setEntrega] = useState("");

  useEffect(() => {
    mostraPrazo();
  });

  function mostraPrazo() {
    const e = document.getElementById("prazo");
    const value = e.options[e.selectedIndex].value;
    setPraze(value);
    mostraEntrega();
  }

  function mostraEntrega() {
    if (praze == 1) {
      setEntrega("14 a 19 dias úteis");
    } else if (praze == 2) {
      setEntrega("11 a 14 dias úteis");
    } else if (praze == 3) {
      setEntrega("8 a 9 dias úteis");
    } else if (praze == 4) {
      setEntrega("4 a 8 dias úteis");
    } else if (praze == 5) {
      setEntrega("7 a 8 dias úteis");
    }
  }

  return (
    <div className="container">
      <div className="field">
        <label htmlFor="prazo" className="titlePrazo">
          Prazos de entrega:
        </label>
        <select
          name="prazo"
          id="prazo"
          className="select"
          value={praze}
          onChange={mostraPrazo}
        >
          <option value="0">Selecione uma Regiao</option>
          <option value="1">Norte</option>
          <option value="2">Nordeste</option>
          <option value="3">Centro Oeste</option>
          <option value="4">Sudeste</option>
          <option value="5">Sul</option>
        </select>

        <p className="entrega">{entrega}</p>
      </div>

      <div className="pagamento">
        <img src={formasdepagamento} />
      </div>
    </div>
  );
}

export default BuyFunctions;
