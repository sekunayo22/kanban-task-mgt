import Button from "../Button";
import Modal from "../Modal";
import {
  ActionButtons,
  DeleteDialog,
  DeleteDescription,
  DeleteTitle,
} from "./styles";

type DeleteTaskProps = {
  taskTitle: string;
  handleClose: () => void;
  handleConfirm: () => void;
};

function DeleteTask({
  taskTitle,
  handleClose,
  handleConfirm,
}: DeleteTaskProps) {
  return (
    <Modal toggleModal handleClose={handleClose}>
      <DeleteDialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-task-title"
      >
        <DeleteTitle id="delete-task-title">Delete this task?</DeleteTitle>
        <DeleteDescription>
          Are you sure you want to delete the “{taskTitle}” task and its
          subtasks? This action cannot be reversed.
        </DeleteDescription>
        <ActionButtons>
          <Button type="button" variant="danger" handleClick={handleConfirm}>
            Delete
          </Button>
          <Button type="button" variant="secondary" handleClick={handleClose}>
            Cancel
          </Button>
        </ActionButtons>
      </DeleteDialog>
    </Modal>
  );
}

export default DeleteTask;
