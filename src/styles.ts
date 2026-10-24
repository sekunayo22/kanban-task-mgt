import styled from "@emotion/styled";
import Button from "./components/Button";
import { colors, PlusJakartaSans } from "./styles/abstracts/variables";

export const AppShell = styled.div`
  --surface: ${colors.surface};
  --canvas: ${colors.canvas};
  --line: ${colors.border};
  --muted: ${colors.muted};
  --text: ${colors.text};
  --accent: ${colors.accent};
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: row;
  min-width: 360px;
  min-height: 100vh;
  overflow: hidden;
  background: var(--canvas);
  color: var(--text);
  font-family: ${PlusJakartaSans};
  font-synthesis: none;
  text-rendering: optimizeLegibility;

  &,
  & * {
    box-sizing: border-box;
  }
  & * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  & *::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
  button,
  input {
    font: inherit;
  }
  button {
    border: 0;
    cursor: pointer;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
`;
export const Workspace = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
`;
export const BoardArea = styled.main`
  position: relative;
  flex: 1;
  min-width: 0;
  overflow: auto;
  padding: 24px;
  background: var(--canvas);
  @media (max-width: 760px) {
    padding: 24px 16px;
  }
`;
export const Columns = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  min-height: 100%;
  width: max-content;
  @media (max-width: 760px) {
    gap: 16px;
  }
`;
export const Column = styled.section`
  width: 288px;
  flex: 0 0 288px;
  max-height: calc(100vh - 168px);
  display: flex;
  flex-direction: column;
  @media (max-width: 760px) {
    width: 280px;
    flex-basis: 280px;
    max-height: calc(100vh - 130px);
  }
`;
export const ColumnHeading = styled.div`
  height: 28px;
  flex: 0 0 28px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 24px;
`;
export const ColumnDot = styled.i<{ $color: string }>`
  width: 12px;
  height: 12px;
  flex: 0 0 12px;
  margin-top: 2px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;
export const ColumnTitle = styled.h2`
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.2px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  padding: 0 4px 16px 0;
`;
export const TaskCardButton = styled.div`
  width: 100%;
  min-height: 86px;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0;
  padding: 20px;
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  text-align: left;
  box-shadow: 0 4px 3px ${colors.shadow};
  transition: transform 120ms ease;
  &:hover {
    transform: scale(1.02);
  }
`;
export const TaskTitle = styled.h3`
  margin: 0 0 8px;
  color: var(--text);
  font-size: 14px;
  line-height: 19.25px;
  font-weight: 700;
`;
export const TaskMeta = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
`;
export const StyledNewColumnButton = styled.div`
  width: 288px;
  flex: 0 0 288px;
  min-height: calc(100vh - 192px);
  margin-top: 28px;
  border: 1px dashed ${colors.border};
  border-radius: 8px;
  background: ${colors.surfaceRaised};
  color: var(--muted);
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 760px) {
    width: 280px;
    flex-basis: 280px;
    min-height: calc(100vh - 112px);
  }
`;
export const ShowSidebarButton = styled(Button)`
  position: fixed;
  left: 0;
  bottom: 32px;
  width: 56px;
  height: 48px;
  border-radius: 0 999px 999px 0;
  background: var(--accent);
  color: ${colors.text};
  font-size: 18px;
`;
