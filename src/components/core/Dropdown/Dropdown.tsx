import React, { FunctionComponent, useRef, useState } from 'react'
import { StyledContainer, StyledDropContainer } from './Dropdown.styled'

import ArrowBottomIcon from '@src/assets/icons/arrow-bottom.svg'
import { Flex, Icon } from '..'
import { DropdownItem, TDropdownItemProps } from './Item'
import { useOnClickOutside } from '@src/utils'

type TProps = {
  emptyLabel?: string
  value?: TDropdownItemProps['item'] | null
  items?: TDropdownItemProps['item'][]
  onItemSelected?: (item: TDropdownItemProps['item']) => void
  notEditable?: boolean
}

export const Dropdown: FunctionComponent<TProps> = ({
  value,
  items,
  emptyLabel,
  notEditable,
  onItemSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef(null)

  useOnClickOutside({ ref: containerRef, onClickOutside: () => setIsOpen(false) })

  const onItemClick = (item: TDropdownItemProps['item']) => {
    onItemSelected && onItemSelected(item)
    setIsOpen(false)
  }

  return (
    <Flex position="relative" forwardRef={containerRef}>
      <StyledContainer
        gap="xxsmall"
        direction="row"
        justify="center"
        {...(!notEditable && { onClick: () => setIsOpen(!isOpen) })}
      >
        {value?.label || emptyLabel} {!notEditable && <Icon icon={ArrowBottomIcon} />}
      </StyledContainer>
      {isOpen && !!items?.length && !notEditable && (
        <StyledDropContainer direction="column">
          {items.map(item => (
            <DropdownItem onClick={() => onItemClick(item)} key={item.value} item={item} />
          ))}
        </StyledDropContainer>
      )}
    </Flex>
  )
}

export type TDropdownProps = TProps
