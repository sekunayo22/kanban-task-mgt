import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App.tsx";
import { normalize } from "./styles/base/reset";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <Global styles={normalize} />
      <App />
    </StrictMode>
  </Provider>,
);
