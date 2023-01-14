// hello there

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { MaterialUIControllerProvider } from "context";
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
