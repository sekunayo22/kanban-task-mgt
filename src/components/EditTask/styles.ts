import styled from "@emotion/styled";
import Button from "../Button";
import { colors } from "../../styles/abstracts/variables";

export const EditTaskDialog = styled.form`
  box-sizing: border-box;
  width: min(480px, calc(100vw - 32px));
  padding: 32px;
  padding-inline: 32px;
  overflow: clip;
  border-radius: 8px;
  background: ${colors.surface};
  color: ${colors.text};
  box-shadow: 0 25px 50px -12px ${colors.shadow};

  @media (max-width: 520px) {
    padding: 24px 20px;
    padding-inline: 20px;
  }
`;
export const EditDialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const EditDialogTitle = styled.h2`
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
export const FieldLabel = styled.label`
  display: block;
  margin: 0 0 8px;
  color: ${colors.text};
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
`;
export const FieldGroup = styled.div`
  margin-bottom: 24px;
`;
export const SubtaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SubtaskRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const AddSubtaskButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;
export const SubmitButton = styled(Button)`
  width: 100%;
  min-height: 44px;
`;
export const DeleteTaskButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  background: transparent;
  color: ${colors.danger};
  &:hover {
    background: ${colors.dangerSubtle};
  }
`;
