import { useSortable } from "@dnd-kit/react/sortable";
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

function TaskCard({ task, handleClick, index }: TaskCardProps) {
  const {ref} =  useSortable({id: task?.id, index})
  return (
    <TaskCardButton ref={ref} role="button" onClick={handleClick}>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskMeta>
        {task.done} of {task.total} subtasks
      </TaskMeta>
    </TaskCardButton>
  );
}

export default TaskCard;
