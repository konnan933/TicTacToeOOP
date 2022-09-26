import Szimbolum from "../Szimbolum.js";

class JatekTerulet {
  #szimbolumLista = [];
  constructor() {
    this.jatekTerulet = $(".jatekTer").append(
      `<div class="jatekTerulet"></div>`
    );
    this.szimbolum = "X";
    for (let index = 0; index < 9; index++) {
      this.#szimbolumLista.push(new Szimbolum(index, "", $(".jatekTerulet")));
    }
    this.melyikJatekosJon();
  }

  melyikJatekosJon() {
    document.getElementById(
      "kovetkezoJatekos"
    ).innerHTML = `${this.szimbolum} játékos következik`;
  }

  //new Szimbolum();
}

export default JatekTerulet;
