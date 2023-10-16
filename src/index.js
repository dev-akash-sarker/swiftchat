import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebaseConfig from "./database/firebase.config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
