import View from "./view.js";

class HelloView extends View {
  _parentEl = document.querySelector("#centered-box");

  _generateMarkup() {
    return `
      <div id="hello-box" class="rel flexc fcenter">
        <h1 id="hello" class="rel">Hello, what's your name?</h1>
        <form id="name-form" class="rel">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
          />
          <div id="submit" class="rel flexr fcenter">
            <div id="ok">OK</div>
          </div>
        </form>
      </div>
    `;
  }

  getName() {
    return this._parentEl.querySelector("#name").value;
  }

  addHandlerOKBtn(handler) {
    this._parentEl.querySelector("#submit").addEventListener("click", (e) => {
      e.preventDefault();
      handler();
    });
  }
}
export default new HelloView();
