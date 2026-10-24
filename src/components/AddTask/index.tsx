import { useState, type FormEvent } from "react";
import type { EditTaskDraft } from "../EditTask";
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

export default function AddTask({
  statuses,
  handleClose,
  handleCreate,
}: {
  statuses: string[];
  handleClose: () => void;
  handleCreate: (task: EditTaskDraft) => void;
}) {
  const [task, setTask] = useState<EditTaskDraft>({
    title: "",
    description: "",
    subtasks: [],
    status: statuses[0] ?? "",
  });
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (task.title.trim() && task.status) handleCreate(task);
  }
  return (
    <Modal toggleModal handleClose={handleClose}>
      <EditTaskDialog onSubmit={submit}>
        <EditDialogHeader>
          <EditDialogTitle>Add New Task</EditDialogTitle>
          <CloseButton
            type="button"
            onClick={handleClose}
            aria-label="Close"
          >
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
          <p role="status">Add a column to this board before creating a task.</p>
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
