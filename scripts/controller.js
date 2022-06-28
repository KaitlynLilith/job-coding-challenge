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
  const helloName = helloView.getName();
  model.state.name = helloName;
  introView.render(model.state.name);
}
