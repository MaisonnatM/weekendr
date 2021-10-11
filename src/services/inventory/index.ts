import { useEffect, useState } from 'react'

export type TInventoryItem = {
  name: string
  weight: number
}

export const useInventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useState<TInventoryItem[]>([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    fetch('https://weekndr.herokuapp.com/api/v2/cabin-luggage-inventory').then(async res => {
      const data = await res.json()
      setIsloading(false)
      setInventoryItems(data.items)
    })
  }, [])

  return {
    isLoading,
    inventoryItems,
  }
}
