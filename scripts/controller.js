import * as model from "./model.js";
import View from "./views/view.js";
import helloView from "./views/helloView.js";
import introView from "./views/introView.js";

function init() {
  helloView.render(true);
  helloView.addHandlerOKBtn(controlOKBtn);
}
init();

function controlOKBtn() {
  model.state.name = helloView.getName().toLowerCase();
  introView.render(model.state.name);
}
