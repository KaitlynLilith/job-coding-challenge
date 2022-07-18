import * as model from "./model.js";
import View from "./views/view.js";
import helloView from "./views/helloView.js";
import introView from "./views/introView.js";
import changeView from "./views/changeView.js";

let newGame = false;

function init() {
  if (newGame) {
    model.state.money = 0;
  }
  helloView.render(true);
  helloView.addHandlerOKBtn(controlOKBtn);
  changeView.addHandlerAddChange(controlAcceptChange);
}
init();

function controlOKBtn() {
  model.state.name = helloView.getName().toLowerCase();
  introView.render(model.state.name);
}

function controlAcceptChange() {
  model.state.money += Number(changeView.getChangeValue());
  changeView.setTotalValue(+model.state.money);
}
function wonGame() {}
