import { useState, type FormEvent } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import Dropdown from "../Dropdown";
import Modal from "../Modal";
import {
  EditTaskDialog,
  EditDialogHeader,
  EditDialogTitle,
  CloseButton,
  FieldGroup,
  SubmitButton,
} from "../EditTask/styles";
import type { AddTaskRequest } from "../../models/task";

export default function AddTask({
  statuses,
  handleClose,
  boardId,
}: {
  statuses: string[];
  handleClose: () => void;
  boardId: number;
}) {
  const [task, setTask] = useState<AddTaskRequest>({
    title: "",
    description: "",
    subtasks: [],
    status: statuses[0] ?? "",
    boardId: boardId,
  });
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <Modal toggleModal handleClose={handleClose}>
      <EditTaskDialog onSubmit={submit}>
        <EditDialogHeader>
          <EditDialogTitle>Add New Task</EditDialogTitle>
          <CloseButton type="button" onClick={handleClose} aria-label="Close">
            ×
          </CloseButton>
        </EditDialogHeader>
        <FieldGroup>
          <Input
            id="new-task-title"
            label="Title"
            value={task.title}
            handleChange={(event) =>
              setTask({ ...task, title: event.target.value })
            }
            autoFocus
          />
        </FieldGroup>
        <FieldGroup>
          <Textarea
            id="new-task-description"
            label="Description"
            value={task.description}
            handleChange={(event) =>
              setTask({ ...task, description: event.target.value })
            }
          />
        </FieldGroup>
        <FieldGroup>
          <Dropdown
            id="new-task-status"
            label="Status"
            value={task.status}
            options={statuses}
            handleChange={(event) =>
              setTask({ ...task, status: event.target.value })
            }
          />
        </FieldGroup>
        {statuses.length === 0 && (
          <FieldGroup>
            <p role="status">
              Add a column to this board before creating a task.
            </p>
          </FieldGroup>
        )}
        <SubmitButton
          type="submit"
          variant="primary"
          disabled={!statuses.length}
        >
          Create Task
        </SubmitButton>
      </EditTaskDialog>
    </Modal>
  );
}
