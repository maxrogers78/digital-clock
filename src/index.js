import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { DateTimeProvider, DarkModeProvider } from "./context";

import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <DateTimeProvider>
        <App />
      </DateTimeProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
