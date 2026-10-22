import { TaskCardButton, TaskMeta, TaskTitle } from "../../styles";
import { useSortable } from "@dnd-kit/react/sortable";

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
  index:number;
};

function TaskCard({ task, handleClick, columnId, index }: TaskCardProps) {
  const { ref, isDragging } = useSortable({
    id: task.id,
    index,
    group: columnId,
    type: "task",
    accept: "task",
  });

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
