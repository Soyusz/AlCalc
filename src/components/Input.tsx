import React, { forwardRef, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

export type InputProps = {
  value: string
  onValueChange?: (value: string) => void
  disabled?: true
  required?: boolean
  error?: string[]
  hideErrorMessage?: true
  className?: string
  label?: string
  infoIcon?: true
  onInfoIconOpen?: () => void
  mask?: string
  alwaysShowMask?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onValueChange'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onValueChange = () => {},
      name,
      type = 'text',
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
      onValueChange(e.target.value)
    }
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
        {!!error && !hideErrorMessage && <ErrorMessage>{typeof error === 'string' ? error : error[0]}</ErrorMessage>}
      </InputContainer>
    )
  }
)

const InputContainer = styled.div`
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const InputStyled = styled.input<{ isError: boolean }>`
  padding: 10px 12px;
  outline: none;
  align-self: stretch;
  border: none;
  background-color: #eceef2;
  font-size: 14px;
  border-radius: 100px;
  box-shadow: none;
  color: ${(props) => (props.isError ? 'red' : 'black')};
  width: 100%;
  border: ${(props) => (props.isError ? '1px solid red' : 'none')};
`

const ErrorMessage = styled.p`
  color: red;
  margin: 5px;
  font-size: 12px;
  text-align: right;
`

const Label = styled.label<{ isError: boolean }>`
  font-size: 12px;
  margin-bottom: 4px;
  padding-left: 10px;
  color: ${({ isError }) => (isError ? 'red' : '#555555')};
`
