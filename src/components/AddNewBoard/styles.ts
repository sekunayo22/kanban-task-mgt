import styled from "@emotion/styled";
import Button from "../Button";
import { colors } from "../../styles/abstracts/variables";

export const BoardModal = styled.form`
  width: min(480px, 100%);
  padding: 32px;
  border: 1px solid ${colors.modalBorder};
  border-radius: 8px;
  background: ${colors.surface};
  color: ${colors.text};
  box-shadow: 0 25px 50px -12px ${colors.shadow};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
`;

export const CloseButton = styled(Button)`
  min-height: 24px;
  padding: 0;
  border-radius: 0;
  background: transparent;
  color: ${colors.mutedControl};
  font-size: 22px;
  line-height: 22px;
  &:hover {
    background: transparent;
    color: ${colors.text};
  }
`;

export const FieldGroup = styled.div`
  margin-bottom: 24px;
`;

export const FieldLabel = styled.label`
  display: block;
  margin: 0 0 8px;
  color: ${colors.text};
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
`;

export const ColumnFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AddColumnButton = styled(Button)`
  width: 100%;
  margin-top: 12px;
`;

export const PrimaryButton = styled(Button)`
  width: 100%;
  min-height: 44px;
`;
