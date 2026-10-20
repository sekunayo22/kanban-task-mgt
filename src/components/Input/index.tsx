import type { ChangeEventHandler } from "react";
import { InputControl, InputLabel } from "./styles";

type InputProps = {
  id?: string;
  label?: string;
  ariaLabel?: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
};

function Input({
  id,
  label,
  ariaLabel,
  value,
  handleChange,
  autoFocus,
}: InputProps) {
  return (
    <>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputControl
        id={id}
        aria-label={ariaLabel}
        value={value}
        onChange={handleChange}
        autoFocus={autoFocus}
      />
    </>
  );
}

export default Input;
