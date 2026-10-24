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
  boardName: string | undefined;
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
        <PrimaryButton variant="primary" onClick={handleAddTask}>
          <b>+</b>
          <DesktopLabel>Add New Task</DesktopLabel>
          <MobileLabel>Add Task</MobileLabel>
        </PrimaryButton>
        <MenuWrap>
          <KebabButton
            aria-label="Board actions"
            aria-expanded={menuOpen}
            onClick={handleToggleMenu}
          >
            ⋮
          </KebabButton>
          {menuOpen && (
            <ActionMenu>
              <ActionMenuButton onClick={handleAddColumn}>
                Add new column
              </ActionMenuButton>
              <ActionMenuButton onClick={handleResetBoard}>
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
