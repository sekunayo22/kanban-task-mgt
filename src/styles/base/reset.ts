import { css } from "@emotion/react";
import { colors, PlusJakartaSans } from "../abstracts/variables";

export const normalize = css`
  :root {
    font-family: ${PlusJakartaSans};
    color: ${colors.text};
    background: ${colors.canvas};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-width: 360px;
    min-height: 100%;
    margin: 0;
  }

  body {
    background: ${colors.canvas};
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;
