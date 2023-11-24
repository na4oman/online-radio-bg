import React, { useState, ChangeEvent } from 'react'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  defaultValue?: string
  onChange?: (value: string) => void
}

const Select: React.FC<SelectProps> = ({ options, defaultValue, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  )

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value
    setSelectedValue(newValue)

    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <select value={selectedValue} onChange={handleSelectChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
