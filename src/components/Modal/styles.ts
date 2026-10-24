import styled from "@emotion/styled";
import { colors, PlusJakartaSans } from "../../styles/abstracts/variables";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  font-family: ${PlusJakartaSans};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.overlay};
  z-index: 10000;
  align-items: center;
  justify-content: center;
  padding: 16px;

  &,
  & * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  &::-webkit-scrollbar,
  & *::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  /* Ensure modal content is always visible and scrollable */
  & > div {
    max-height: calc(100vh - 32px);
    max-width: calc(100vw - 32px);
    overflow-y: auto;
    overflow-x: hidden;
  }

  /* Keep dialogs centered on narrow screens. */
  @media (max-width: 768px) {
    align-items: center;
    padding: 16px;

    & > div {
      width: auto;
      max-width: calc(100vw - 32px);
      max-height: calc(100vh - 32px);
      overflow-x: hidden;
    }
  }
`;
