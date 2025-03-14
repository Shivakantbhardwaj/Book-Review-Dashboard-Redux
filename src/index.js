import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // ✅ Ensure correct import
import { store } from "./redux/store";  // ✅ Ensure correct store import
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* ✅ Redux Provider must wrap App */}
      <App />
    </Provider>
  </React.StrictMode>
);
