class Szimbolum {
  #index;
  constructor(index, szuloElem) {
    this.#index = index;
    szuloElem.append(`<div class="szimbolum" id=${this.#index}></div>`);

    this.szimbolumElem = szuloElem.children("div:last-child");
    this.szimbolumElem.on("click", () => {
      this.kattintasTrigger();
    });
  }

  szimbolumHelyez(index, szimbolum) {
    document.getElementById(`${index}`).innerHTML = szimbolum;
  }

  kattintasTrigger() {
    let esemeny = new CustomEvent("szimbolumBehelyzes", {
      detail: this.#index,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Szimbolum;
