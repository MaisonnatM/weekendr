import { Paragraph } from '@src/components/core'
import { useHover } from '@src/utils'
import React, { FunctionComponent, useMemo } from 'react'
import { StyledContainer } from './Item.styled'

type TContext = 'add' | 'remove' | 'view'
type TItem = { title: string; value: string }

type TProps = { item: TItem; ctx: TContext; onClick?: () => void }

export const InventoryCardItem: FunctionComponent<TProps> = ({ ctx, item, onClick }) => {
  const { isHover, hoverProps } = useHover()

  const actionText = useMemo(() => {
    switch (ctx) {
      case 'add':
        return 'Add →'
      case 'remove':
        return '← Remove'
      case 'view':
        return null
    }
  }, [ctx])

  return (
    <StyledContainer {...hoverProps} onClick={onClick} justify="between">
      <Paragraph serif>{item.title}</Paragraph>
      {isHover && actionText ? (
        <Paragraph color="primary">{actionText}</Paragraph>
      ) : (
        <Paragraph color="light">{item.value}</Paragraph>
      )}
    </StyledContainer>
  )
}

export type TInventoryCardItemProps = TProps
