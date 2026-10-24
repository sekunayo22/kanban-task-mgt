import styled from "@emotion/styled";
import { colors } from "../../styles/abstracts/variables";

export const StyledButton = styled.button<{
  variant: "primary" | "secondary" | "danger" | "card";
  fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  min-height: 40px;
  padding: 0 24px;
  border: 0;
  border-radius: 999px;
  background: ${({ variant }) => (variant === "primary" ? colors.accent : variant === "danger" ? colors.danger : variant === "card" ? colors.surface : colors.white)};
  color: ${({ variant }) => (variant === "secondary" ? colors.accent : variant === "card" ? colors.text : colors.white)};
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  transition:
    background-color 120ms ease,
    opacity 120ms ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentFocus};
    outline-offset: 2px;
  }
`;
