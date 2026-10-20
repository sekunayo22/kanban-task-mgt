import type { FormEventHandler } from "react";
import CloseableInput from "../CloseableInput";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Textarea from "../Textarea";
import Modal from "../Modal";
import {
  AddSubtaskButton,
  CloseButton,
  DeleteTaskButton,
  EditDialogHeader,
  EditDialogTitle,
  EditTaskDialog,
  FieldGroup,
  FieldLabel,
  SubtaskList,
  SubmitButton,
} from "./styles";

export type EditTaskDraft = {
  title: string;
  description: string;
  subtasks: string[];
  status: string;
};

type EditTaskProps = {
  task: EditTaskDraft;
  statuses: string[];
  handleChange: (task: EditTaskDraft) => void;
  handleClose: () => void;
  handleDelete: () => void;
  handleSave: FormEventHandler<HTMLFormElement>;
};

function EditTask({
  task,
  statuses,
  handleChange,
  handleClose,
  handleDelete,
  handleSave,
}: EditTaskProps) {
  return (
    <Modal toggleModal handleClose={handleClose}>
      <EditTaskDialog onSubmit={handleSave}>
        <EditDialogHeader>
          <EditDialogTitle>Edit Task</EditDialogTitle>
          <CloseButton
            type="button"
            handleClick={handleClose}
            aria-label="Close"
          >
            ×
          </CloseButton>
        </EditDialogHeader>
        <FieldGroup>
          <Input
            id="task-title"
            label="Title"
            autoFocus
            value={task.title}
            handleChange={(event) =>
              handleChange({ ...task, title: event.target.value })
            }
          />
        </FieldGroup>
        <FieldGroup>
          <Textarea
            id="task-description"
            label="Description"
            value={task.description}
            handleChange={(event) =>
              handleChange({ ...task, description: event.target.value })
            }
          />
        </FieldGroup>
        <FieldGroup>
          <FieldLabel>Subtasks</FieldLabel>
          <SubtaskList>
            {task.subtasks.map((subtask, index) => (
              <CloseableInput
                key={index}
                ariaLabel={`Subtask ${index + 1}`}
                value={subtask}
                handleChange={(event) =>
                  handleChange({
                    ...task,
                    subtasks: task.subtasks.map((item, itemIndex) =>
                      itemIndex === index ? event.target.value : item,
                    ),
                  })
                }
                handleClose={() =>
                  handleChange({
                    ...task,
                    subtasks: task.subtasks.filter(
                      (_, itemIndex) => itemIndex !== index,
                    ),
                  })
                }
              />
            ))}
          </SubtaskList>
          <AddSubtaskButton
            type="button"
            variant="secondary"
            handleClick={() =>
              handleChange({ ...task, subtasks: [...task.subtasks, ""] })
            }
          >
            + Add New Subtask
          </AddSubtaskButton>
        </FieldGroup>
        <FieldGroup>
          <Dropdown
            id="task-status"
            label="Status"
            value={task.status}
            options={statuses}
            handleChange={(event) =>
              handleChange({ ...task, status: event.target.value })
            }
          />
        </FieldGroup>
        <SubmitButton type="submit" variant="primary">
          Save Changes
        </SubmitButton>
        <DeleteTaskButton
          type="button"
          variant="danger"
          handleClick={handleDelete}
        >
          Delete Task
        </DeleteTaskButton>
      </EditTaskDialog>
    </Modal>
  );
}

export default EditTask;
