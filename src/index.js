import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";

import { Provider } from "react-redux";

import loggerMiddleware from "./middleware/logger";
import store from "./store";

// const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
