import View from "./view.js";

class IntroView extends View {
  _parentEl = document.querySelector("#insulation");

  _generateMarkup() {
    return `
    <img src="images/federation-ship.png" alt="Star Trek Federation Ship" id="federation" />
    <div id="centered-box" class="rel flexc">
      <div id="intro-box" class="rel flexr">
        <h2 id="intro" class="rel">
          Nice to meet you,
          <div id="helloName" class="rel">
          ${this._data}<span id="type">!!</span>
          </div>
        </h2>
      </div>
    </div>
    <img src="images/borg-cube.png" alt="Star Trek Borg Cube" id="borg" />
    `;
  }
}
export default new IntroView();
