import type { ChangeEventHandler } from "react";
import { TextareaControl, TextareaLabel } from "./styles";

type TextareaProps = {
  id?: string;
  label?: string;
  ariaLabel?: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
};

function Textarea({
  id,
  label,
  ariaLabel,
  value,
  handleChange,
  rows,
}: TextareaProps) {
  return (
    <>
      {label && <TextareaLabel htmlFor={id}>{label}</TextareaLabel>}
      <TextareaControl
        id={id}
        aria-label={ariaLabel}
        value={value}
        onChange={handleChange}
        rows={rows}
      />
    </>
  );
}

export default Textarea;
