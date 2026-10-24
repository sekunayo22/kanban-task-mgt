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
  boards: string[] | undefined;
  activeBoard: string | undefined;
  handleSelectBoard: (board: string) => void;
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
        <Eyebrow>All boards {boards?.length ? `(${boards.length})` : null}</Eyebrow>
        <BoardNav aria-label="Boards">
          {boards?.map((board) => (
            <BoardLink
              key={board}
              $active={activeBoard === board}
              handleClick={() => handleSelectBoard(board)}
            >
              <BoardMark>
                <i />
                <i />
                <i />
              </BoardMark>
              <span>{board}</span>
            </BoardLink>
          ))}
          <BoardLink $create handleClick={handleCreateBoard}>
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
        <HideSidebarButton handleClick={handleHide}>
          <span aria-hidden="true">◁</span> Hide Sidebar
        </HideSidebarButton>
      </SidebarBottom>
    </SidebarPanel>
  );
}

export default Sidebar;
