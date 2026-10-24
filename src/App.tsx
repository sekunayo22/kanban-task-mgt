import { useState, type FormEvent } from "react";
import {
  AppShell,
  BoardArea,
  Columns,
  MainContent,
  ShowSidebarButton,
  Workspace,
} from "./styles";
import EditTask, { type EditTaskDraft } from "./components/EditTask";
import AddNewBoard from "./components/AddNewBoard";
import DeleteTask from "./components/DeleteTask";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BoardColumn from "./components/BoardColumn";
import NewColumnButton from "./components/NewColumnButton";
import AddColumn from "./components/AddColumn";
import AddTask from "./components/AddTask";
import { DragDropProvider } from "@dnd-kit/react";
import { colors } from "./styles/abstracts/variables";

export type Task = {
  id: string;
  title: string;
  done: number;
  total: number;
  description?: string;
  subtasks?: string[];
};

export type Column = {
  id: string;
  name: string;
  color: string;
  tasks: Task[];
};

function App() {
  const [columns, setColumns] = useState<Column[] | undefined>(undefined);
  const [boards, setBoards] = useState<string[] | undefined>(undefined);
  const [activeBoard, setActiveBoard] = useState<string | undefined>(undefined);
  const [addBoardOpen, setAddBoardOpen] = useState(false);
  const [addColumnOpen, setAddColumnOpen] = useState(false);
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [deletingTask, setDeletingTask] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [editingOriginalId, setEditingOriginalId] = useState<string | null>(
    null,
  );
  const [editingTask, setEditingTask] = useState<EditTaskDraft | null>(null);

  function editTask(task: Task, status: string) {
    setEditingOriginalId(task.id);

    setEditingTask({
      title: task.title,
      description: task.description ?? "",
      subtasks: task.subtasks ?? [],
      status,
    });
  }

  function saveTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setEditingTask(null);
    setEditingOriginalId(null);
  }

  function createBoard(name: string, columnNames: string[]) {
    setActiveBoard(name);

    setAddBoardOpen(false);
  }

  function createColumn(name: string) {
    const cleanName = name.trim();
    if (!cleanName) return;
    setColumns((current) => [
      ...(current ?? []),
      {
        id: `column-${Date.now()}`,
        name: cleanName,
        color: [
          colors.columnTodo,
          colors.columnDoing,
          colors.columnDone,
          colors.columnAdditional,
        ][(current?.length ?? 0) % 4],
        tasks: [],
      },
    ]);
    setAddColumnOpen(false);
  }

  function createTask(task: EditTaskDraft) {
    setColumns((current) =>
      current?.map((column) =>
        column.name === task.status
          ? {
              ...column,
              tasks: [
                ...column.tasks,
                {
                  id: `task-${Date.now()}`,
                  title: task.title.trim(),
                  description: task.description,
                  subtasks: task.subtasks
                    .map((item) => item.trim())
                    .filter(Boolean),
                  total: task.subtasks
                    .map((item) => item.trim())
                    .filter(Boolean).length,
                  done: 0,
                },
              ],
            }
          : column,
      ),
    );
    setAddTaskOpen(false);
  }

  function confirmDeleteTask() {
    if (!deletingTask) return;

    setDeletingTask(null);
    setEditingTask(null);
    setEditingOriginalId(null);
  }


  return (
    <DragDropProvider>
      <AppShell>
        {sidebarOpen && (
          <Sidebar
            boards={boards}
            activeBoard={activeBoard}
            handleSelectBoard={setActiveBoard}
            handleCreateBoard={() => setAddBoardOpen(true)}
            handleHide={() => setSidebarOpen(false)}
          />
        )}
        <MainContent>
          <Header
            boardName={activeBoard}
            menuOpen={menuOpen}
            handleAddTask={() => {
              setMenuOpen(false);
              setAddTaskOpen(true);
            }}
            handleAddColumn={() => {
              setMenuOpen(false);
              setAddColumnOpen(true);
            }}
            handleResetBoard={() => setColumns(undefined)}
            handleToggleMenu={() => setMenuOpen((value) => !value)}
          />
          <Workspace>
            <BoardArea aria-label={`${activeBoard} board`}>
              <Columns>
                {columns?.map((column) => (
                  <BoardColumn
                    key={column.name}
                    editTask={editTask}
                    column={column}
                  />
                ))}
                <NewColumnButton handleClick={() => setAddColumnOpen(true)} />
              </Columns>
              {!sidebarOpen && (
                <ShowSidebarButton
                  type="button"
                  variant="primary"
                  handleClick={() => setSidebarOpen(true)}
                  aria-label="Show sidebar"
                >
                  <span>◧</span>
                </ShowSidebarButton>
              )}
            </BoardArea>
          </Workspace>
        </MainContent>
        {editingTask && (
          <EditTask
            task={editingTask}
            statuses={columns?.map((column) => column.name)}
            handleChange={setEditingTask}
            handleClose={() => {
              setEditingTask(null);
              setEditingOriginalId(null);
            }}
            handleDelete={() => {
              if (editingOriginalId) {
                setDeletingTask(editingOriginalId);
              }
            }}
            handleSave={saveTask}
          />
        )}

        {addBoardOpen && (
          <AddNewBoard
            handleClose={() => setAddBoardOpen(false)}
            handleCreate={createBoard}
          />
        )}

        {addColumnOpen && (
          <AddColumn
            handleClose={() => setAddColumnOpen(false)}
            handleCreate={createColumn}
          />
        )}
        {addTaskOpen && (
          <AddTask
            statuses={columns?.map((column) => column.name) ?? []}
            handleClose={() => setAddTaskOpen(false)}
            handleCreate={createTask}
          />
        )}

        {deletingTask && (
          <DeleteTask
            taskTitle={
              columns
                ?.flatMap((column) => column.tasks)
                .find((task) => task.id === deletingTask)?.title ?? ""
            }
            handleClose={() => setDeletingTask(null)}
            handleConfirm={confirmDeleteTask}
          />
        )}
      </AppShell>
    </DragDropProvider>
  );
}

export default App;
