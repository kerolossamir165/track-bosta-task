import React from "react";
import ReactDOM from "react-dom";
import App from "components/App/ِApp";
import { Provider } from "Context/DataContext";
import "./i18n";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
