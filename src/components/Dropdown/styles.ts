import styled from "@emotion/styled";
import { colors } from "../../styles/abstracts/variables";

export const DropdownLabel = styled.label`
  display: block;
  margin: 0 0 8px;
  color: ${colors.text};
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
`;

export const DropdownControl = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 36px 0 12px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  outline: none;
  appearance: none;
  color-scheme: dark;
  background-color: ${colors.canvas};
  background-image:
    linear-gradient(45deg, transparent 50%, ${colors.accent} 50%),
    linear-gradient(135deg, ${colors.accent} 50%, transparent 50%);
  background-position:
    calc(100% - 18px) 17px,
    calc(100% - 13px) 17px;
  background-size:
    5px 5px,
    5px 5px;
  background-repeat: no-repeat;
  color: ${colors.text};
  font-size: 12px;
  cursor: pointer;

  option {
    background: ${colors.surface};
    color: ${colors.text};
  }

  &:focus {
    border-color: ${colors.accent};
    box-shadow: 0 0 0 1px ${colors.accent};
  }
`;
