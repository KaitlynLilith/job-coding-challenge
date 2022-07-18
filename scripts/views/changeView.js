import View from "./view.js";

class ChangeView extends View {
  _parentEl = document.querySelector("#change-view");

  _generateMarkup() {
    return `
    
    `;
  }

  setTotalValue(value) {
    this._parentEl.querySelector("#total-box").innerHTML = "";
    this._parentEl.querySelector("#total-box").innerHTML = Number(value);
  }

  getChangeValue() {
    return this._parentEl.querySelector("#coin").value;
  }

  addHandlerAddChange(handler) {
    this._parentEl.querySelector("#submit").addEventListener("click", (e) => {
      e.preventDefault();
      handler();
    });
  }
}
export default new ChangeView();
