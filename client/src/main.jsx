import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "./styles/index.css";
import "./i18n.js"; // Initialize i18n before rendering the app
import { store } from "./app/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <React.Suspense fallback="loading">
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>
);
