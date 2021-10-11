import { Flex, Icon } from '@src/components/core'

import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'

import ArrowRight from '@src/assets/icons/arrow-right.svg'

import { getObjectKeysTyped } from '@src/utils'
import { Dropdown } from '@src/components/core/Dropdown/Dropdown'
import { TDropdownItemProps } from '@src/components/core/Dropdown/Item'
import { useRouter } from 'next/dist/client/router'
import { getAirlines, TInventoryItem, useInventoryItems } from '@src/services'
import { InventoryCard } from '@src/components/inventory'
import { TInventoryCardItemProps } from '@src/components/inventory/Card/Item'

type TProps = {}

type TAirlineItem = {
  id: number
  name: string
  weight: number
}

export const HomeView: FunctionComponent<TProps> = () => {
  const [formattedInventoryItems, setFormattedInventoryItems] = useState<
    (TInventoryItem & { selected: boolean })[]
  >([])
  const [selectedAirline, setSelectedAirline] = useState<TAirlineItem | null>(null)

  const router = useRouter()

  const { inventoryItems, isLoading } = useInventoryItems()

  useEffect(() => {
    setFormattedInventoryItems(inventoryItems.map(item => ({ ...item, selected: false })))
  }, [inventoryItems])

  const airlines = useMemo(() => getAirlines(), [])

  const itemSelectable = useMemo(
    () => formattedInventoryItems.filter(item => !item.selected),
    [formattedInventoryItems],
  )

  const selectedItems = useMemo(
    () => formattedInventoryItems.filter(item => item.selected),
    [formattedInventoryItems],
  )

  const onItemClicked = (
    selectedItem: TInventoryCardItemProps['item'],
    shouldBeSelected: boolean,
  ) => {
    setFormattedInventoryItems(
      formattedInventoryItems.map(item =>
        item.name === selectedItem.title
          ? {
              ...item,
              selected: shouldBeSelected,
            }
          : item,
      ),
    )
  }

  const changeSelectedAirline = (airline: TDropdownItemProps['item']) => {
    const [selectedAirline] = getObjectKeysTyped(airlines).filter(
      key => airlines[key].id === +airline.value,
    )

    setSelectedAirline(airlines[selectedAirline])
  }

  return (
    <Flex direction="column" align="center" gap="large">
      <Dropdown
        onItemSelected={changeSelectedAirline}
        emptyLabel="Airlines"
        value={
          selectedAirline
            ? { value: selectedAirline.id.toString(), label: selectedAirline.name }
            : null
        }
        items={getObjectKeysTyped(airlines).map(key => ({
          value: airlines[key].id.toString(),
          label: airlines[key].name,
        }))}
      />
      <Flex direction="row" gap="medium" align="start">
        <InventoryCard
          isLoading={isLoading}
          title="🛍 Inventory"
          onItemClicked={item => onItemClicked(item, true)}
          ctx="add"
          items={itemSelectable}
        />

        <Icon alignSelf="center" icon={ArrowRight} />
        <InventoryCard
          isLoading={false}
          title="✅ Selected"
          onItemClicked={item => onItemClicked(item, false)}
          ctx="remove"
          items={selectedItems}
          showTotal
          airlineMaxWeight={selectedAirline?.weight}
          action={{
            title: 'Voir le résumé',
            onClick: () =>
              router.push({
                pathname: '/report',
                query: {
                  airlineId: selectedAirline?.id,
                  items: encodeURI(selectedItems.map(item => item.name).join(',')),
                },
              }),
          }}
        />
      </Flex>
    </Flex>
  )
}

export type THomeViewProps = TProps
