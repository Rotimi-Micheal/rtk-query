import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { ProductsApi } from "./services/ApiSlice";
import { store } from "./services/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={ProductsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
