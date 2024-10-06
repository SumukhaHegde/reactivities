import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import AppStore from "./Store/Appstore.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={AppStore}>
    <App />
  </Provider>
);
