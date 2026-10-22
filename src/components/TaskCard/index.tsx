import { TaskCardButton, TaskMeta, TaskTitle } from "../../styles";

export type TaskCardData = {
  title: string;
  done: number;
  total: number;
  id: string;
};

type TaskCardProps = {
  task: TaskCardData;
  handleClick: () => void;
  columnId: string;
  index: number;
};

function TaskCard({ task, handleClick }: TaskCardProps) {
  return (
    <TaskCardButton role="button" onClick={handleClick}>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskMeta>
        {task.done} of {task.total} subtasks
      </TaskMeta>
    </TaskCardButton>
  );
}

export default TaskCard;
