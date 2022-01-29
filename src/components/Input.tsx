import React, { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

export type InputProps = {
  value: string;
  onValueChange?: (value: string) => void;
  disabled?: true;
  required?: boolean;
  error?: string[];
  hideErrorMessage?: true;
  className?: string;
  label?: string;
  infoIcon?: true;
  onInfoIconOpen?: () => void;
  mask?: string;
  alwaysShowMask?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onValueChange = () => {},
      name,
      type = "text",
      placeholder,
      disabled,
      required = false,
      error = [],
      hideErrorMessage,
      className,
      label,
      infoIcon,
      onInfoIconOpen,
      mask,
      alwaysShowMask = false,
      ...rest
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange(e.target.value);
    };
    return (
      <InputContainer className={className}>
        <Label isError={!!error.length}>{label}</Label>
        <InputStyled
          value={value}
          onChange={handleChange}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          isError={!!error.length}
          ref={ref}
          {...rest}
        />
        {!!error && !hideErrorMessage && (
          <ErrorMessage>
            {typeof error === "string" ? error : error[0]}
          </ErrorMessage>
        )}
      </InputContainer>
    );
  }
);

const InputContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const InputStyled = styled.input<{ isError: boolean }>`
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 12px 15px;
  outline: none;
  align-self: stretch;
  border: 1px solid ${({ isError }) => (isError ? "red" : "transparent")};
  &:focus {
    border: 1px solid "black";
  }
`;

const ErrorMessage = styled.p`
  color: "red";
  margin: 5px;
  font-size: 12px;
  text-align: right;
`;

const Label = styled.label<{ isError: boolean }>`
  font-size: 12px;
  color: ${({ isError }) => (isError ? "red" : "white")};
`;
