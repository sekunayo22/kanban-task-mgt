import { useDroppable } from "@dnd-kit/react";
import { StyledNewColumnButton } from "../../styles";

function NewColumnButton() {
  const {ref} = useDroppable({id: "new-column"});
  return (
    <StyledNewColumnButton ref={ref}>
      + New Column
    </StyledNewColumnButton>
  );
}

export default NewColumnButton;
