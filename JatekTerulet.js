import Szimbolum from "../Szimbolum.js";

class JatekTerulet {
  #szimbolumLista = [];
  constructor() {
    this.kinekLepeseJon = true;
    this.szimbolum = "X";
    this.jatekTerulet = $(".jatekTer").append(
      `<div class="jatekTerulet"></div>`
    );
    for (let index = 0; index < 9; index++) {
      this.#szimbolumLista.push(new Szimbolum(index, $(".jatekTerulet")));
    }
    this.melyikJatekosJon();

    $(window).on("szimbolumBehelyzes", (event) => {
      this.melyikJatekosJon();
      this.szimbulomBehelyez(event.detail);
    });
  }
  szimbulomBehelyez(index) {
    console.log(this.#szimbolumLista[index]);
    this.#szimbolumLista[index].szimbolumHelyez(
      index,
      this.kinekLepeseJon ? "<h2>X</h2>" : "<h2>O</h2>"
    );
    this.kinekLepeseJon = !this.kinekLepeseJon;
    this.szimbolum = this.kinekLepeseJon ? "X" : "O";
  }
  melyikJatekosJon() {
    document.getElementById(
      "kovetkezoJatekos"
    ).innerHTML = `${this.szimbolum} játékos következik`;
  }
}

export default JatekTerulet;
