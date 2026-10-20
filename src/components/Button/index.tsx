import type { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "card";
  fullWidth?: boolean;
  handleClick?: () => void;
};

function Button({
  children,
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
      onClick={handleClick}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
