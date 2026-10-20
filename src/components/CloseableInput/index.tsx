import type { ChangeEventHandler } from "react";
import Input from "../Input";
import { CloseableInputRow, RemoveButton } from "./styles";

type CloseableInputProps = {
  value: string;
  ariaLabel: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClose: () => void;
};

function CloseableInput({
  value,
  ariaLabel,
  handleChange,
  handleClose,
}: CloseableInputProps) {
  return (
    <CloseableInputRow>
      <Input value={value} ariaLabel={ariaLabel} handleChange={handleChange} />
      <RemoveButton
        type="button"
        aria-label={`Remove ${ariaLabel}`}
        handleClick={handleClose}
      >
        ×
      </RemoveButton>
    </CloseableInputRow>
  );
}

export default CloseableInput;
