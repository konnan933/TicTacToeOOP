import Szimbolum from "../Szimbolum.js";

class JatekTerulet {
  #szimbolumLista = [];
  #nyeroHelyzetek = [];
  constructor() {
    this.nyeroIndex = 0;
    this.#nyeroHelyzetek = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    this.kinekLepeseJon = true;
    this.jatekTerulet = $(".jatekTer").append(
      `<div class="jatekTerulet"></div>`
    );
    for (let index = 0; index < 9; index++) {
      this.#szimbolumLista.push(new Szimbolum(index, $(".jatekTerulet")));
    }
    this.melyikJatekosJon();

    $(window).on("szimbolumBehelyzes", (event) => {
      this.szimbulomBehelyez(event.detail);
      this.melyikJatekosJon();
      this.nyertekE();
    });
  }
  szimbulomBehelyez(index) {
    this.#szimbolumLista[index].szimbolumHelyez(
      index,
      this.kinekLepeseJon ? "<h2>X</h2>" : "<h2>O</h2>"
    );
    this.kinekLepeseJon = !this.kinekLepeseJon;
    this.szimbolum = this.kinekLepeseJon ? "X" : "O";
  }
  melyikJatekosJon() {
    document.getElementById("kovetkezoJatekos").innerHTML = `${
      !this.kinekLepeseJon ? "O" : "X"
    } játékos következik`;
  }
  nyertekE() {
    let elsoSzimb =
      this.#szimbolumLista[this.#nyeroHelyzetek[this.nyeroIndex][0]].szimbolum;
    let masodikSzimb =
      this.#szimbolumLista[this.#nyeroHelyzetek[this.nyeroIndex][1]].szimbolum;
    let harmadikSzimb =
      this.#szimbolumLista[this.#nyeroHelyzetek[this.nyeroIndex][2]].szimbolum;
    while (
      this.nyeroIndex < this.#nyeroHelyzetek.length &&
      !(elsoSzimb = masodikSzimb && masodikSzimb == harmadikSzimb)
    ) {
      elsoSzimb =
        this.#szimbolumLista[this.#nyeroHelyzetek[this.nyeroIndex][0]]
          .szimbolum;
      masodikSzimb =
        this.#szimbolumLista[this.#nyeroHelyzetek[this.nyeroIndex][1]]
          .szimbolum;
      harmadikSzimb =
        this.#szimbolumLista[this.#nyeroHelyzetek[this.nyeroIndex][2]]
          .szimbolum;
      this.nyeroIndex++;
      console.log(this.nyeroIndex);
    }
    if (this.nyeroIndex < this.#nyeroHelyzetek.length) {
      console.log("asd");
      this.kiNyert();
    }
    this.nyeroIndex = 0;
  }
  kiNyert() {
    let kiNyert =
      this.szimbolum == "O"
        ? document.getElementById("xJatekos").value
        : document.getElementById("oJatekos").value;

    document.getElementById("nyertes").innerHTML = kiNyert;
  }
}

export default JatekTerulet;
