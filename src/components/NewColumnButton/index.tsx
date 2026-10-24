import { useDroppable } from "@dnd-kit/react";
import { StyledNewColumnButton } from "../../styles";

function NewColumnButton({ handleClick }: { handleClick: () => void }) {
  const { ref } = useDroppable({ id: "new-column" });
  return (
    <StyledNewColumnButton
      as="button"
      type="button"
      ref={ref}
      onClick={handleClick}
    >
      + New Column
    </StyledNewColumnButton>
  );
}

export default NewColumnButton;
