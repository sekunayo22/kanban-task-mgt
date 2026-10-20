import type { ChangeEventHandler } from "react";
import { DropdownControl, DropdownLabel } from "./styles";

type DropdownProps = {
  id?: string;
  label?: string;
  value: string;
  options: string[];
  handleChange: ChangeEventHandler<HTMLSelectElement>;
};

function Dropdown({ id, label, value, options, handleChange }: DropdownProps) {
  return (
    <>
      {label && <DropdownLabel htmlFor={id}>{label}</DropdownLabel>}
      <DropdownControl id={id} value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </DropdownControl>
    </>
  );
}

export default Dropdown;
