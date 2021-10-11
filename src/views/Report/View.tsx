import { Card, Dropdown, Flex } from '@src/components/core'
import { InventoryCard } from '@src/components/inventory'
import { getAirlines, useInventoryItems } from '@src/services'
import { getObjectKeysTyped } from '@src/utils'
import { useRouter } from 'next/dist/client/router'
import React, { FunctionComponent, useMemo } from 'react'

type TProps = {}

export const ReportView: FunctionComponent<TProps> = () => {
  const { query } = useRouter()
  const { inventoryItems, isLoading } = useInventoryItems()
  const { items, airlineId } = useMemo(() => {
    return {
      airlineId: query.airlineId,
      items: decodeURI(query.items as string).split(','),
    }
  }, [query.items])

  const airlines = useMemo(() => getAirlines(), [])

  const selectedAirline = useMemo(() => {
    const [key] = getObjectKeysTyped(airlines).filter(
      key => airlines[key].id.toString() === airlineId,
    )

    return airlines[key]
  }, [airlines, airlineId])

  const selectedItems = useMemo(() => {
    return inventoryItems.filter(inventoryItem => items.includes(inventoryItem.name))
  }, [inventoryItems])

  return (
    <Flex direction="column" gap="large" align="center">
      <Dropdown
        notEditable
        value={
          selectedAirline && { value: selectedAirline.id.toString(), label: selectedAirline.name }
        }
        items={[]}
      />
      <InventoryCard
        isLoading={isLoading}
        title="🎒 My backpack"
        ctx="view"
        items={selectedItems}
        showTotal
      />
    </Flex>
  )
}

export type TReportViewProps = TProps
