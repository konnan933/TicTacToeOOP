class Szimbolum {
  #index;
  constructor(index, szimbolum, szuloElem) {
    this.szimbolum = szimbolum;
    this.#index = index;
    szuloElem.append(`<div class="szimbolum"></div>`);

    this.szimbolumElem = szuloElem.children("div:last-child");
    this.szimbolumElem.on("click", () => {
      this.szimbolumHelyzes();
      this.kattintasTrigger();
    });
  }

  szimbolumHelyzes() {
    this.szimbolumElem.html = this.szimbolum;
  }

  kattintasTrigger() {
    let esemeny = new CustomEvent("szimbolumBehelyzes", {
      detail: this.#index,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Szimbolum;
