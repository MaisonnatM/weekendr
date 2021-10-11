import React, { FunctionComponent } from 'react'

import { StyledContainer, TParagraphStyles } from './Paragraph.styled'

type TProps = {
  title?: string
  onClick?: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
} & TParagraphStyles

export const Paragraph: FunctionComponent<TProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

Paragraph.defaultProps = {
  color: 'dark',
}

export type TParagraphProps = TProps
