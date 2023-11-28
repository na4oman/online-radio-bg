import React, { ChangeEvent } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Radio } from '@/types'

interface SelectGenreProps {
  setFilteredGenre: (value: string) => void
}

// type OnValueChange = (value: string) => void

const SelectGenre: React.FC<SelectGenreProps> = ({ setFilteredGenre }) => {
  const handleChange = (value: string) => {
    // const value = e.target.value
    setFilteredGenre(value)
  }

  return (
    <Select onValueChange={handleChange}>
      {/* <Select> */}
      <SelectTrigger className='w-[250px]'>
        <SelectValue placeholder='---Select a Genre---' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a genre</SelectLabel>
          <SelectItem value='all'>All</SelectItem>
          <SelectItem value='decades'>Decades</SelectItem>
          <SelectItem value='pop'>Pop</SelectItem>
          <SelectItem value='folk'>Pop Folk</SelectItem>
          <SelectItem value='rock'>Rock</SelectItem>
          <SelectItem value='Hip Hop'>Hip Hop</SelectItem>
          <SelectItem value='talk'>Talk</SelectItem>
          <SelectItem value='dance'>Dance</SelectItem>
          <SelectItem value='language'>Language</SelectItem>
          <SelectItem value='classical'>Classical</SelectItem>
          <SelectItem value='jazz'>Jazz</SelectItem>
          <SelectItem value='alternative'>Alternative</SelectItem>
          <SelectItem value='electronic'>Electronic</SelectItem>
          <SelectItem value='rnb'>RnB</SelectItem>
          <SelectItem value='Easy Listening'>Easy Listening</SelectItem>
          <SelectItem value='country'>Country</SelectItem>
          <SelectItem value='religion'>Religion</SelectItem>
          <SelectItem value='community'>Community</SelectItem>
          <SelectItem value='african'>African</SelectItem>
          <SelectItem value='region'>Region</SelectItem>
          <SelectItem value='latin'>Latin</SelectItem>
          <SelectItem value='caribbean'>Caribbean</SelectItem>
          <SelectItem value='theme'>Theme</SelectItem>
          <SelectItem value='reggae'>Reggae</SelectItem>
          <SelectItem value='other'>Other</SelectItem>
          <SelectItem value='blues'>Blues</SelectItem>
          <SelectItem value='indian'>Indian</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectGenre
