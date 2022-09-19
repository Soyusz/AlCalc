import styled from 'styled-components'
import loaderGif from '../assets/loader.gif'

export type CustomButtonVariants = 'primary' | 'secondary'

type ButtonProps = {
  label: string
  variant?: CustomButtonVariants
  onClick?: () => void
  disabled?: boolean
  className?: string
  isLoading?: boolean
}

export const Button = ({
  label,
  variant = 'primary',
  onClick = () => {},
  isLoading,
  className,
  disabled,
}: ButtonProps) => (
  <WrapperButton variant={variant} onClick={onClick} disabled={disabled} className={className}>
    {isLoading ? <img src={loaderGif} /> : label}
  </WrapperButton>
)

const WrapperButton = styled.button<any>`
  width: 100%;
  padding: 12px 12px;
  background-color: ${({ variant, theme }) => (variant === 'primary' ? theme.colors.primary : theme.colors.white)};
  color: ${({ variant, theme }) => (variant === 'primary' ? theme.colors.white : theme.colors.primary)};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:active {
    background-color: ${({ variant, theme }) => (variant === 'primary' ? theme.primary : 'white')};
  }

  > img {
    max-height: 1.2em;
  }

  @media screen and (max-height: 600px) {
    transform: scale(0.9);
  }
`
