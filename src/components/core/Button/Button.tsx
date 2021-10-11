import React, { FunctionComponent } from 'react'
import { StyledButtonProps, StyledContainer } from './Button.styled'

type TProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} & StyledButtonProps

export const Button: FunctionComponent<TProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export type TButtonProps = TProps
