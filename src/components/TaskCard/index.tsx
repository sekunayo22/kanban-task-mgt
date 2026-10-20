import { TaskCardButton, TaskMeta, TaskTitle } from "../../styles";

export type TaskCardData = {
  title: string;
  done: number;
  total: number;
};

type TaskCardProps = {
  task: TaskCardData;
  handleClick: () => void;
};

function TaskCard({ task, handleClick }: TaskCardProps) {
  return (
    <TaskCardButton
      type="button"
      variant="card"
      handleClick={handleClick}
    >
      <TaskTitle>{task.title}</TaskTitle>
      <TaskMeta>
        {task.done} of {task.total} subtasks
      </TaskMeta>
    </TaskCardButton>
  );
}

export default TaskCard;
