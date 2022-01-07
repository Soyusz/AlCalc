import styled from "styled-components";

type CustomButtonVariants = "primary" | "secondary";

type ButtonProps = {
  label: string;
  variant?: CustomButtonVariants;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  label,
  variant = "primary",
  onClick = () => {},
  disabled = false,
  className,
}: ButtonProps) => (
  <WrapperButton
    variant={variant}
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {label}
  </WrapperButton>
);

const WrapperButton = styled.button<any>`
  max-width: 200px;
  width: 100%;
  font-weight: 700;
  padding: 12px 12px;
  background-color: #a04eff;
  color: ${({ variant }) => (variant === "primary" ? "white" : "#0088ff")};
  border: 1px solid #a04eff;
  border-radius: 10px;
  font-size: 16px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:active {
    background-color: ${({ variant }) =>
      variant === "primary" ? "#a04eff" : "white"};
  }

  @media screen and (max-height: 600px) {
    transform: scale(0.9);
  }
`;
