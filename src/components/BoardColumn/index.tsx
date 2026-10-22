import type { Column, Task } from "../../App";
import { ColumnHeading, ColumnDot, ColumnTitle, TaskList, Column as StyledBoardColumn } from "../../styles";
import TaskCard from "../TaskCard";

interface BoardColumnProps {
    editTask: (task: Task, status: string) => void;
    column: Column;
}

function BoardColumn({
    column,
    editTask
}: BoardColumnProps) {
    return (
        <StyledBoardColumn key={column.name}>
            <ColumnHeading>
                <ColumnDot $color={column.color} />
                <ColumnTitle>
                    {column.name} ({column.tasks.length})
                </ColumnTitle>
            </ColumnHeading>

            <TaskList>
                {column.tasks.map((task, index) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        index={index}
                        columnId={column?.id}
                        handleClick={() =>
                            editTask(task, column.name)
                        }
                    />
                ))}
            </TaskList>
        </StyledBoardColumn>
    );
}

export default BoardColumn;
