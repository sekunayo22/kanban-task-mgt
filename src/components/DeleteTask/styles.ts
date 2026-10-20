import styled from "@emotion/styled";
import { colors } from "../../styles/abstracts/variables";

export const DeleteDialog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: min(480px, calc(100vw - 32px));
  padding: 32px;
  border-radius: 8px;
  background: ${colors.surface};
  box-shadow: 0 25px 50px -12px ${colors.shadow};
  color: ${colors.text};
`;

export const DeleteTitle = styled.h2`
  margin: 0;
  color: ${colors.danger};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.45px;
`;

export const DeleteDescription = styled.p`
  margin: 0;
  color: ${colors.muted};
  font-size: 14px;
  font-weight: 500;
  line-height: 22.75px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 5px;

  & > button {
    flex: 1 1 0;
    min-width: 0;
    min-height: 44px;
    font-size: 14px;
    letter-spacing: 0.35px;
  }

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
