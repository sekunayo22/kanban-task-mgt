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
import { colors } from "./styles/abstracts/variables";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BoardColumn from "./components/BoardColumn";
import NewColumnButton from "./components/NewColumnButton";
import { DragDropProvider, type DragEndEvent } from "@dnd-kit/react";

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

    if (!editingTask || !editingOriginalId) return;

    setColumns((current) => {
      let taskToMove: Task | undefined;

      const withoutEditedTask = current?.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => {
          const matches = task.id === editingOriginalId;

          if (matches) {
            taskToMove = {
              ...task,
              id: task.id,
              title: editingTask.title,
              description: editingTask.description,
              subtasks: editingTask.subtasks,
              total: editingTask.subtasks.length,
              done: Math.min(task.done, editingTask.subtasks.length),
            };
          }

          return !matches;
        }),
      }));

      return withoutEditedTask?.map((column) =>
        column.name === editingTask.status && taskToMove
          ? {
            ...column,
            tasks: [...column.tasks, taskToMove],
          }
          : column,
      );
    });

    setEditingTask(null);
    setEditingOriginalId(null);
  }

  function createBoard(name: string, columnNames: string[]) {
    setBoards((current: string[] | undefined) =>
      current?.includes(name) ? current : [...(current ?? []), name]
    );

    setActiveBoard(name);

    setColumns(
      columnNames.map((columnName, index: number) => ({
        id: `column-${index + 1}`,
        name: columnName,
        color: [
          colors.columnTodo,
          colors.columnDoing,
          colors.columnDone,
          colors.columnAdditional,
        ][index % 4],
        tasks: [],
      })),
    );

    setAddBoardOpen(false);
  }

  function confirmDeleteTask() {
    if (!deletingTask) return;

    setColumns((current) =>
      current?.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => task.id !== deletingTask),
      })),
    );

    setDeletingTask(null);
    setEditingTask(null);
    setEditingOriginalId(null);
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const taskId = event.operation.source?.id;
    const columnId = event.operation.target?.id;

    if (columnId !== "new-column") return;

    setColumns((prevColumns: Column[] | undefined) => {
      const task = prevColumns?.flatMap(column => column.tasks).find(task => task.id === taskId);
      if (!task) return prevColumns;
      const updatedColumns: Column[] | undefined = prevColumns?.map((column) => {
        return {
          ...column,
          tasks: column.tasks.filter((task) => task.id !== taskId)
        }
      })
      return [
        ...updatedColumns!,
        {
          id: `column-${Date.now()}`,
          name: `New Column ${prevColumns!.length + 1}`,
          color: "#000",
          tasks: [task]
        }
      ]
    })

  }
  return (
    <DragDropProvider onDragEnd={(event) => handleDragEnd(event)}>
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
            handleAddTask={() => { }}
            handleAddColumn={() => { }}
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
                <NewColumnButton />
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
