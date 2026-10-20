import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App.tsx";
import { normalize } from "./styles/base/reset";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={normalize} />
    <App />
  </StrictMode>,
);
