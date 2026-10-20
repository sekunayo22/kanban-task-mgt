import styled from "@emotion/styled";
import { colors } from "../../styles/abstracts/variables";

export const TextareaLabel = styled.label`
  display: block;
  margin: 0 0 8px;
  color: ${colors.text};
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
`;

export const TextareaControl = styled.textarea`
  width: 100%;
  min-height: 100px;
  margin-bottom: 24px;
  padding: 10px 12px;
  resize: vertical;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  outline: none;
  background: ${colors.canvas};
  color: ${colors.text};
  font-size: 12px;
  line-height: 17px;

  &:focus {
    border-color: ${colors.accent};
    box-shadow: 0 0 0 1px ${colors.accent};
  }
`;
