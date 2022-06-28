import View from "./view.js";

class IntroView extends View {
  _parentEl = document.querySelector("#centered-box");

  _generateMarkup() {
    return `
      <div id="intro-box" class="rel flexr">
        <h2 id="intro" class="rel">
          Nice to meet you,
          <div id="helloName" class="rel">
          ${this._data}
            <span id="type">
            !!
            </span>
          </div>
        </h2>
      </div>
    `;
  }
}
export default new IntroView();
