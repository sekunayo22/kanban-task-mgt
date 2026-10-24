import { useState, type FormEvent } from "react";
import CloseableInput from "../CloseableInput";
import Input from "../Input";
import Modal from "../Modal";
import {
  AddColumnButton,
  BoardModal,
  ColumnFields,
  FieldGroup,
  FieldLabel,
  ModalHeader,
  ModalTitle,
  PrimaryButton,
  CloseButton,
} from "./styles";

type AddNewBoardProps = {
  handleClose: () => void;
  handleCreate: (name: string, columns: string[]) => void;
};

function AddNewBoard({ handleClose, handleCreate }: AddNewBoardProps) {
  const [name, setName] = useState("Platform Launch 2.0");
  const [columns, setColumns] = useState(["Todo", "Doing", "Done"]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanColumns = columns.map((column) => column.trim()).filter(Boolean);
    if (!cleanName || cleanColumns.length === 0) return;
    handleCreate(cleanName, cleanColumns);
  }

  return (
    <Modal toggleModal handleClose={handleClose}>
      <BoardModal onSubmit={submit}>
        <ModalHeader>
          <ModalTitle>Add New Board</ModalTitle>
          <CloseButton
            type="button"
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </CloseButton>
        </ModalHeader>
        <FieldGroup>
          <FieldLabel htmlFor="board-name">Board Name</FieldLabel>
          <Input
            id="board-name"
            value={name}
            handleChange={(event) => setName(event.target.value)}
            autoFocus
          />
        </FieldGroup>
        <FieldGroup>
          <FieldLabel>Board Columns</FieldLabel>
          <ColumnFields>
            {columns.map((column, index) => (
              <CloseableInput
                key={index}
                ariaLabel={`Board column ${index + 1}`}
                value={column}
                handleChange={(event) =>
                  setColumns((current) =>
                    current.map((item, itemIndex) =>
                      itemIndex === index ? event.target.value : item,
                    ),
                  )
                }
                handleClose={() =>
                  setColumns((current) =>
                    current.filter((_, itemIndex) => itemIndex !== index),
                  )
                }
              />
            ))}
          </ColumnFields>
          <AddColumnButton
            type="button"
            variant="secondary"
            onClick={() => setColumns((current) => [...current, ""])}
          >
            + Add New Column
          </AddColumnButton>
        </FieldGroup>
        <PrimaryButton type="submit" variant="primary">
          Create New Board
        </PrimaryButton>
      </BoardModal>
    </Modal>
  );
}

export default AddNewBoard;
