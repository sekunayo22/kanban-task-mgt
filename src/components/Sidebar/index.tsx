import type { BoardResponse } from "../../models/board";
import {
  BoardLink,
  BoardMark,
  BoardNav,
  BrandName,
  Eyebrow,
  HideSidebarButton,
  SidebarBottom,
  SidebarBrand,
  SidebarPanel,
  SidebarTop,
} from "./styles";

type SidebarProps = {
  boards: BoardResponse[] | undefined;
  activeBoard: BoardResponse | undefined;
  handleSelectBoard: (board: BoardResponse) => void;
  handleCreateBoard: () => void;
  handleHide: () => void;
};

function Sidebar({
  boards,
  activeBoard,
  handleSelectBoard,
  handleCreateBoard,
  handleHide,
}: SidebarProps) {
  return (
    <SidebarPanel>
      <SidebarTop>
        <SidebarBrand>
          <BoardMark>
            <i />
            <i />
            <i />
          </BoardMark>
          <BrandName>kanban</BrandName>
        </SidebarBrand>
        <Eyebrow>
          All boards {boards?.length ? `(${boards.length})` : null}
        </Eyebrow>
        <BoardNav aria-label="Boards">
          {boards?.map((board) => (
            <BoardLink
              key={board?.id}
              active={activeBoard?.name === board?.name}
              onClick={() => handleSelectBoard(board)}
            >
              <BoardMark>
                <i />
                <i />
                <i />
              </BoardMark>
              <span>{board?.name}</span>
            </BoardLink>
          ))}
          <BoardLink create onClick={handleCreateBoard}>
            <BoardMark>
              <i />
              <i />
              <i />
            </BoardMark>
            <span>+ Create New Board</span>
          </BoardLink>
        </BoardNav>
      </SidebarTop>
      <SidebarBottom>
        <HideSidebarButton onClick={handleHide}>
          <span aria-hidden="true">◁</span> Hide Sidebar
        </HideSidebarButton>
      </SidebarBottom>
    </SidebarPanel>
  );
}

export default Sidebar;
