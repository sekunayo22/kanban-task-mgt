import {
  ActionMenu,
  ActionMenuButton,
  BoardTitle,
  DesktopLabel,
  HeaderActions,
  HeaderBar,
  KebabButton,
  MenuWrap,
  MobileLabel,
  PrimaryButton,
} from "./styles";

type HeaderProps = {
  boardName: string;
  menuOpen: boolean;
  handleAddTask: () => void;
  handleAddColumn: () => void;
  handleResetBoard: () => void;
  handleToggleMenu: () => void;
};

function Header({
  boardName,
  menuOpen,
  handleAddTask,
  handleAddColumn,
  handleResetBoard,
  handleToggleMenu,
}: HeaderProps) {
  return (
    <HeaderBar>
      <BoardTitle>{boardName}</BoardTitle>
      <HeaderActions>
        <PrimaryButton variant="primary" handleClick={handleAddTask}>
          <b>+</b>
          <DesktopLabel>Add New Task</DesktopLabel>
          <MobileLabel>Add Task</MobileLabel>
        </PrimaryButton>
        <MenuWrap>
          <KebabButton
            aria-label="Board actions"
            aria-expanded={menuOpen}
            handleClick={handleToggleMenu}
          >
            ⋮
          </KebabButton>
          {menuOpen && (
            <ActionMenu>
              <ActionMenuButton handleClick={handleAddColumn}>
                Add new column
              </ActionMenuButton>
              <ActionMenuButton handleClick={handleResetBoard}>
                Reset sample board
              </ActionMenuButton>
            </ActionMenu>
          )}
        </MenuWrap>
      </HeaderActions>
    </HeaderBar>
  );
}

export default Header;
