import styled from "@emotion/styled";
import Button from "../Button";
import { colors } from "../../styles/abstracts/variables";

export const HeaderBar = styled.header`
  height: 96px;
  flex: 0 0 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  @media (max-width: 760px) {
    height: 64px;
    flex-basis: 64px;
  }
`;
export const BoardTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.6px;
  font-weight: 700;
  white-space: nowrap;
  @media (max-width: 760px) {
    max-width: calc(100vw - 220px);
    margin-left: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
  }
`;
export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const PrimaryButton = styled(Button)`
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border-radius: 999px;
  background: var(--accent);
  color: ${colors.text};
  font-weight: 700;
  transition: background 0.15s ease;
  b {
    margin-right: 8px;
    font-size: 18px;
  }
  @media (max-width: 760px) {
    min-height: 40px;
    padding: 0 16px;
    font-size: 12px;
    b {
      display: none;
    }
  }
`;
export const DesktopLabel = styled.span`
  @media (max-width: 760px) {
    display: none;
  }
`;
export const MobileLabel = styled.span`
  display: none;
  @media (max-width: 760px) {
    display: inline;
  }
`;
export const MenuWrap = styled.div`
  position: relative;
`;
export const KebabButton = styled(Button)`
  min-height: 40px;
  padding: 8px 4px 8px 24px;
  background: transparent;
  color: var(--muted);
  font-size: 25px;
  line-height: 24px;
  @media (max-width: 760px) {
    padding-left: 16px;
  }
`;
export const ActionMenu = styled.div`
  position: absolute;
  z-index: 5;
  top: 42px;
  right: 0;
  width: 190px;
  padding: 8px;
  border-radius: 8px;
  background: var(--canvas);
  box-shadow: 0 8px 24px ${colors.menuShadow};
`;
export const ActionMenuButton = styled(Button)`
  display: block;
  width: 100%;
  min-height: auto;
  padding: 10px;
  border-radius: 4px;
  background: transparent;
  color: var(--muted);
  text-align: left;
  font-size: 12px;
`;
