import React, { FunctionComponent } from 'react'
import { StyledContainer } from './Item.styled'

type TItem = {
  value: string
  label: string
}

type TProps = {
  item: TItem
  onClick: () => void
}

export const DropdownItem: FunctionComponent<TProps> = ({ item, ...props }) => {
  return <StyledContainer {...props}>{item.label}</StyledContainer>
}

export type TDropdownItemProps = TProps
