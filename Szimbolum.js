class Szimbolum {
  #index;
  constructor(index, szuloElem) {
    this.#index = index;
    this.szimbolum = "";
    szuloElem.append(`<div class="szimbolum" id=${this.#index}></div>`);

    this.szimbolumElem = szuloElem.children("div:last-child");
    this.szimbolumElem.on("click", () => {
      this.kattintasTrigger();
    });
  }

  szimbolumHelyez(index, szimbolum) {
    document.getElementById(`${index}`).innerHTML = szimbolum;
    this.eventLeszedes();
    this.szimbolum = szimbolum;
  }
  eventLeszedes() {
    this.szimbolumElem.off("click");
  }

  kattintasTrigger() {
    let esemeny = new CustomEvent("szimbolumBehelyzes", {
      detail: this.#index,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Szimbolum;
