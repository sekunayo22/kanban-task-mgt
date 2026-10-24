import styled from "@emotion/styled";
import Button from "../Button";
import { colors } from "../../styles/abstracts/variables";

export const BoardMark = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  width: 20px;
  flex: 0 0 20px;
  height: 24px;
  i {
    width: 6px;
    height: 24px;
    border-radius: 2px;
    background: var(--accent);
  }
  i:nth-of-type(2) {
    opacity: 0.8;
  }
  i:nth-of-type(3) {
    opacity: 0.5;
  }
`;

export const SidebarPanel = styled.aside`
  width: 300px;
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--surface);
  border-right: 1px solid var(--line);
  @media (max-width: 760px) {
    display: none;
  }
`;
export const SidebarBrand = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 32px;
`;
export const BrandName = styled.span`
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -0.75px;
`;
export const SidebarTop = styled.div`
  padding: 0 24px 24px 0;
`;
export const Eyebrow = styled.p`
  margin: 0 32px 16px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
export const BoardNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const BoardLink = styled(Button)<{
  $active?: boolean;
  $create?: boolean;
}>`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px 0 32px;
  border-radius: 0 999px 999px 0;
  background: ${({ $active }) => ($active ? "var(--accent)" : "transparent")};
  color: ${({ $active, $create }) => ($active ? colors.text : $create ? "var(--accent)" : "var(--muted)")};
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  & > span:first-child {
    transform: scale(0.67);
    transform-origin: left center;
    margin-right: -6px;
  }
`;
export const SidebarBottom = styled.div`
  padding: 24px 24px 32px;
`;
export const HideSidebarButton = styled(Button)`
  margin-top: 16px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  color: var(--muted);
  font-size: 14px;
  font-weight: 700;
`;
