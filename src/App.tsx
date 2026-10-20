import { useState, type FormEvent } from "react";
import {
  AppShell,
  BoardArea,
  Column as BoardColumn,
  ColumnDot,
  ColumnHeading,
  ColumnTitle,
  Columns,
  MainContent,
  NewColumnButton,
  ShowSidebarButton,
  TaskList,
  Workspace,
} from "./styles";
import TaskCard from "./components/TaskCard";
import EditTask, { type EditTaskDraft } from "./components/EditTask";
import AddNewBoard from "./components/AddNewBoard";
import DeleteTask from "./components/DeleteTask";
import { colors } from "./styles/abstracts/variables";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

type Task = {
  title: string;
  done: number;
  total: number;
  description?: string;
  subtasks?: string[];
};
type Column = { name: string; color: string; tasks: Task[] };

const initialColumns: Column[] = [
  {
    name: "Todo",
    color: colors.columnTodo,
    tasks: [
      { title: "Build UI for onboarding flow", done: 0, total: 3 },
      { title: "Build UI for search", done: 0, total: 1 },
      { title: "Build settings UI", done: 0, total: 2 },
      { title: "QA and test all major user journeys", done: 0, total: 2 },
    ],
  },
  {
    name: "Doing",
    color: colors.columnDoing,
    tasks: [
      { title: "Design settings and search pages", done: 1, total: 3 },
      { title: "Add account management endpoints", done: 2, total: 3 },
      { title: "Design onboarding flow", done: 1, total: 3 },
      { title: "Add search endpoints", done: 1, total: 2 },
      { title: "Add authentication endpoints", done: 1, total: 2 },
      {
        title:
          "Research pricing points of various competitors and trial different business models",
        done: 2,
        total: 3,
        description:
          "We know what we're planning to build for version one.\nNow we need to finalise the first pricing model we'll use.\nKeep iterating the subtasks until we have a coherent proposition.",
        subtasks: [
          "Research competitor pricing and business models",
          "Outline a business model that works for our solution",
          "Talk to potential customers about our proposed solution",
        ],
      },
    ],
  },
  {
    name: "Done",
    color: colors.columnDone,
    tasks: [
      { title: "Conduct 5 wireframe tests", done: 1, total: 1 },
      { title: "Create wireframe prototype", done: 1, total: 1 },
      {
        title: "Review results of usability tests and iterate",
        done: 3,
        total: 3,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        done: 2,
        total: 2,
      },
      { title: "Market discovery", done: 1, total: 1 },
      { title: "Competitor analysis", done: 2, total: 2 },
      { title: "Research the market", done: 2, total: 2 },
    ],
  },
];

const initialBoards = ["Platform Launch", "Marketing Plan", "Roadmap"];
function App() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [boards, setBoards] = useState(initialBoards);
  const [activeBoard, setActiveBoard] = useState(initialBoards[0]);
  const [addBoardOpen, setAddBoardOpen] = useState(false);
  const [deletingTask, setDeletingTask] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [editingOriginalTitle, setEditingOriginalTitle] = useState("");
  const [editingTask, setEditingTask] = useState<EditTaskDraft | null>(null);

  function editTask(task: Task, status: string) {
    setEditingOriginalTitle(task.title);
    setEditingTask({
      title: task.title,
      description: task.description ?? "",
      subtasks: task.subtasks ?? [],
      status,
    });
  }

  function saveTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editingTask) return;
    setColumns((current) => {
      let taskToMove: Task | undefined;
      const withoutEditedTask = current.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => {
          const matches = task.title === editingOriginalTitle;
          if (matches)
            taskToMove = {
              ...task,
              title: editingTask.title,
              description: editingTask.description,
              subtasks: editingTask.subtasks,
              total: editingTask.subtasks.length,
              done: Math.min(task.done, editingTask.subtasks.length),
            };
          return !matches;
        }),
      }));
      return withoutEditedTask.map((column) =>
        column.name === editingTask.status && taskToMove
          ? { ...column, tasks: [...column.tasks, taskToMove] }
          : column,
      );
    });
    setEditingTask(null);
  }

  function createBoard(name: string, columnNames: string[]) {
    setBoards((current) =>
      current.includes(name) ? current : [...current, name],
    );
    setActiveBoard(name);
    setColumns(
      columnNames.map((columnName, index) => ({
        name: columnName,
        color: [colors.columnTodo, colors.columnDoing, colors.columnDone, colors.columnAdditional][index % 4],
        tasks: [],
      })),
    );
    setAddBoardOpen(false);
  }

  function confirmDeleteTask() {
    if (!deletingTask) return;
    setColumns((current) =>
      current.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => task.title !== deletingTask),
      })),
    );
    setDeletingTask(null);
    setEditingTask(null);
  }

  return (
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
          handleAddTask={() => {}}
          handleAddColumn={() => {}}
          handleResetBoard={() => setColumns(initialColumns)}
          handleToggleMenu={() => setMenuOpen((value) => !value)}
        />
        <Workspace>
          <BoardArea aria-label={`${activeBoard} board`}>
            <Columns>
              {columns.map((column) => (
                <BoardColumn key={column.name}>
                  <ColumnHeading>
                    <ColumnDot $color={column.color} />
                    <ColumnTitle>
                      {column.name} ({column.tasks.length})
                    </ColumnTitle>
                  </ColumnHeading>
                  <TaskList>
                    {column.tasks.map((task, index) => (
                      <TaskCard
                        key={`${task.title}-${index}`}
                        task={task}
                        handleClick={() => editTask(task, column.name)}
                      />
                    ))}
                  </TaskList>
                </BoardColumn>
              ))}
              <NewColumnButton type="button" variant="secondary">
                + New Column
              </NewColumnButton>
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
          statuses={columns.map((column) => column.name)}
          handleChange={setEditingTask}
          handleClose={() => setEditingTask(null)}
          handleDelete={() => setDeletingTask(editingOriginalTitle)}
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
          taskTitle={deletingTask}
          handleClose={() => setDeletingTask(null)}
          handleConfirm={confirmDeleteTask}
        />
      )}
    </AppShell>
  );
}

export default App;
