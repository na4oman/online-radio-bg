'use client'
/* eslint-disable react/jsx-no-comment-textnodes */
import NavMenu from '@/components/NavMenu'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import {
  // products,
  stations,
  // uk_stations,
  // us_stations,
} from '../constants/constants.js'
import { useState } from 'react'
import SelectGenre from '@/components/SelectGenre'
import { Radio } from '@/types.js'
import { Input } from '@/components/ui/input'

export default function Home() {
  const [filteredGenre, setFilteredGenre] = useState('')
  // const [items, setItems] = useState(stations)
  const [search, setSearch] = useState('')
  const [url, setUrl] = useState('')

  // console.log(stations)
  // const renderedStations = us_stations.slice(0, 100)
  // const renderedStations = uk_stations.slice(0, 100)
  const renderedStations = stations

  let filteredData: Radio[] = []

  if (filteredGenre !== '') {
    filteredData = renderedStations
      .filter(
        (item: { genre: string }) =>
          item.genre.toLowerCase() === filteredGenre.toLowerCase()
      )
      .filter((item: { radio_name: string }) =>
        item.radio_name.toLowerCase().includes(search.toLowerCase())
      )
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  return (
    <Container>
      <NavMenu />
      <div className='flex justify-center gap-4'>
        <SelectGenre setFilteredGenre={setFilteredGenre} />
        <Input
          type='text'
          placeholder='Search for a radio station...'
          onChange={handleSearch}
        />
      </div>
      {/* <audio controls src={url} autoplay /> */}
      {filteredGenre === '' || filteredGenre === 'all' ? (
        <ProductList
          // setUrl={setUrl}
          items={renderedStations.filter((item: { radio_name: string }) =>
            item.radio_name.toLowerCase().includes(search.toLowerCase())
          )}
        />
      ) : (
        <ProductList items={filteredData} />
      )}
      {/* {<ProductList items={filteredData} />} */}
    </Container>
  )
}
