import type { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "card";
  fullWidth?: boolean;
  handleClick?: () => void;
};

function Button({
  children,
  onClick,
  variant = "secondary",
  fullWidth = false,
  handleClick,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      onClick={handleClick ?? onClick}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
