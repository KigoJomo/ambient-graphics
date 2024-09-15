// app/components/Home/HomeCollections.js
'use client'

import { wixClient } from '@/app/hooks/wixClient'
import CollectionOverview from './CollectionOverview'
import { useState, useEffect } from 'react'

const HomeCollections = () => {
  const [collections, setCollections] = useState([])

  async function fetchCollections() {
    try {
      const client = await wixClient();
      const data = await client.items
        .queryDataItems({
          dataCollectionId: 'Collections',
        })
        .find()
      setCollections(data.items)
      console.log(data.items);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchCollections()
  }, [])

  return (
    <section className="h-fit flex flex-col gap-6 pb-12">
      <h2 className="uppercase">collections</h2>
      <CollectionOverview collections={collections} />
    </section>
  )
}

export default HomeCollections
