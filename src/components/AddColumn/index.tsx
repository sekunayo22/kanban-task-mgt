import { useState, type FormEvent } from "react";
import Input from "../Input";
import Modal from "../Modal";
import Button from "../Button";
import {
  BoardModal,
  CloseButton,
  FieldGroup,
  FieldLabel,
  ModalHeader,
  ModalTitle,
} from "../AddNewBoard/styles";

export default function AddColumn({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const [name, setName] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim()) {
      console.log("");
    }
  }
  return (
    <Modal toggleModal handleClose={handleClose}>
      <BoardModal onSubmit={submit}>
        <ModalHeader>
          <ModalTitle>Add New Column</ModalTitle>
          <CloseButton type="button" onClick={handleClose} aria-label="Close">
            ×
          </CloseButton>
        </ModalHeader>
        <FieldGroup>
          <FieldLabel htmlFor="column-name">Column Name</FieldLabel>
          <Input
            id="column-name"
            value={name}
            handleChange={(event) => setName(event.target.value)}
            autoFocus
          />
        </FieldGroup>
        <Button type="submit" variant="primary" fullWidth>
          Add Column
        </Button>
      </BoardModal>
    </Modal>
  );
}
