import React, { FunctionComponent } from 'react'
import { TFlexProps } from '..'
import { StyledContainer, TStyledIconProps } from './Icon.styled'

type TProps = {
  icon: FunctionComponent
} & TStyledIconProps &
  Pick<TFlexProps, 'alignSelf'>

export const Icon: FunctionComponent<TProps> = ({ icon, ...props }) => {
  return (
    <StyledContainer align="center" {...props}>
      {React.createElement(icon)}
    </StyledContainer>
  )
}

export type TIconProps = TProps
