// app/components/Home/HomeCollections.js
'use client'

import CollectionOverview from './CollectionOverview'
import { useContext } from 'react'
import { CollectionsContext } from '@/app/context/CollectionsContext'

const HomeCollections = () => {
  const collections = useContext(CollectionsContext)

  return (
    <section className="h-fit flex flex-col gap-6 pb-12">
      <h2 className="uppercase">collections</h2>
      <CollectionOverview collections={collections} />
    </section>
  )
}

export default HomeCollections
