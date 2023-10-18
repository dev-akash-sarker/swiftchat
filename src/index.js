import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// eslint-disable-next-line no-unused-vars
import firebaseConfig from "./database/firebase.config";
import { Provider } from "react-redux";
import store from "./feature/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
