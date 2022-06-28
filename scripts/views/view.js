export default class View {
  _data;

  render(data) {
    if (!data) return;

    this._data = data;
    const markup = this._generateMarkup();

    this.clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this._parentEl.innerHTML = "";
  }
}
