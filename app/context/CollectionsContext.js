'use client'

import { createContext, useState, useEffect } from 'react'
import { wixClient } from '../hooks/wixClient'

export const CollectionsContext = createContext()

export const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState([])

  const fetchCollections = async () => {
    try {
      const client = await wixClient()
      const collectionsData = await client.items
        .queryDataItems({
          dataCollectionId: 'Collections',
        })
        .find()
      setCollections(collectionsData.items)
    } catch (error) {
      console.error('Error fetching collections:', error)
    }
  }

  useEffect(() => {
    fetchCollections()
  }, [])

  return (
    <CollectionsContext.Provider value={collections}>
      {children}
    </CollectionsContext.Provider>
  )
}
