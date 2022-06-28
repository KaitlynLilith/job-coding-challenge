import View from "./view.js";

class HelloView extends View {
  _parentEl = document.querySelector("#insulation");

  _generateMarkup() {
    return `
    <div id="centered-box" class="rel flexc">
      <div id="hello-box" class="rel flexc fcenter">
        <h1 id="hello" class="rel">Hello, what's your name?</h1>
        <form id="name-form" class="rel">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
          />
          <div id="submit" class="rel">
            <img
              src="images/engage.png"
              alt="Star Trek Icon"
              id="engage-icon" class="rel"
            />
            <div id="engage" class="rel flexc fcenter"><p id="engage-text" class="rel">Engage!</p></div>
          </div>
        </form>
      </div>
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
