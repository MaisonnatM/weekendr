import { Button, Card, Flex, Paragraph } from '@src/components/core'
import { TInventoryItem } from '@src/services'
import React, { FunctionComponent, useMemo } from 'react'
import { StyledContainer } from './Card.styled'
import { InventoryCardItem, TInventoryCardItemProps } from './Item'

type TProps = {
  ctx: TInventoryCardItemProps['ctx']
  items: TInventoryItem[]
  title: string
  isLoading?: boolean
  onItemClicked?: (item: TInventoryCardItemProps['item']) => void
  showTotal?: boolean
  airlineMaxWeight?: number
  action?: {
    title: string
    onClick: () => void
  }
}

export const InventoryCard: FunctionComponent<TProps> = ({
  isLoading,
  title,
  ctx,
  items,
  onItemClicked,
  showTotal,
  action,
  airlineMaxWeight,
}) => {
  const formattedItems = useMemo(() => {
    return items.map(item => ({ title: item.name, value: `${item.weight}g` }))
  }, [items])

  const totalSelectItemsWeight = useMemo(
    () => items.reduce((total, item) => total + item.weight, 0),
    [items],
  )

  const areSelectedItemsToHeavy = useMemo(() => {
    return totalSelectItemsWeight / 1000 > (airlineMaxWeight || 0)
  }, [airlineMaxWeight, totalSelectItemsWeight])

  const totalWeightColor = useMemo(() => {
    if (!airlineMaxWeight || totalSelectItemsWeight === 0) {
      return 'light'
    }

    return areSelectedItemsToHeavy ? 'error' : 'success'
  }, [airlineMaxWeight, areSelectedItemsToHeavy, totalSelectItemsWeight])

  const formattedTotalWeight = useMemo(() => {
    return totalSelectItemsWeight >= 1000
      ? `${totalSelectItemsWeight / 1000}kg`
      : `${totalSelectItemsWeight}g`
  }, [totalSelectItemsWeight])

  const isButtonDisabled = useMemo(() => {
    return !airlineMaxWeight || areSelectedItemsToHeavy || !items.length
  }, [airlineMaxWeight, areSelectedItemsToHeavy, items])

  return (
    <Card isLoading={isLoading} title={title}>
      <StyledContainer ctx={ctx} direction="column" gap="xxsmall">
        {formattedItems.map((item, index) => (
          <InventoryCardItem
            key={item.title + item.value + index}
            ctx={ctx}
            item={item}
            {...(onItemClicked && { onClick: () => onItemClicked(item) })}
          />
        ))}
      </StyledContainer>
      {showTotal && (
        <Flex align="end" gap="xxsmall" justify="end">
          <Paragraph color="dark">Total</Paragraph>
          <Paragraph color={totalWeightColor}>{formattedTotalWeight}</Paragraph>
        </Flex>
      )}
      {action && (
        <Flex justify="center">
          <Button onClick={action.onClick} disabled={isButtonDisabled}>
            {action.title}
          </Button>
        </Flex>
      )}
    </Card>
  )
}

export type TInventoryCardProps = TProps
