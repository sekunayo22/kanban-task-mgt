import styled from "@emotion/styled";
import { colors } from "../../styles/abstracts/variables";

export const InputLabel = styled.label`
  display: block;
  margin: 0 0 8px;
  color: ${colors.text};
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
`;

export const InputControl = styled.input`
  width: 100%;
  min-width: 0;
  height: 40px;
  flex: 1;
  padding: 0 12px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  outline: none;
  background: ${colors.canvas};
  color: ${colors.text};
  font-size: 12px;

  &:focus {
    border-color: ${colors.accent};
    box-shadow: 0 0 0 1px ${colors.accent};
  }
`;
