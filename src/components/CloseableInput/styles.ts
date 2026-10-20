import styled from "@emotion/styled";
import Button from "../Button";
import { colors } from "../../styles/abstracts/variables";

export const CloseableInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const RemoveButton = styled(Button)`
  min-height: 24px;
  flex: 0 0 auto;
  padding: 0 2px;
  background: transparent;
  color: ${colors.mutedControl};
  font-size: 18px;
  line-height: 24px;

  &:hover {
    background: transparent;
    color: ${colors.text};
  }
`;
