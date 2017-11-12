import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import WizardForm from "./WizardForm";

import swal from 'sweetalert';


const rootEl = document.getElementById("root");

function deleteThisGoal(values) {
  swal(`Enviaste los valores:\n\n${JSON.stringify(values, null, 2)}`);
}


ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Encuesta preinscripcion UNQ</h2>
      <WizardForm onSubmit={deleteThisGoal} />
      <Values form="wizard" />
    </div>
  </Provider>, rootEl
);
