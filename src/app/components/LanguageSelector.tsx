'use client'

import { ChangeEvent, useState } from 'react'

const LanguageSelector = () => {
  const [language, setLanguage] = useState('en')

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value)
    // Add code here to change the language of your app
  }

  return (
    <div>
      <label
        htmlFor="language"
        className="mb-2 block font-medium text-gray-700"
      >
        Language
      </label>
      <select
        id="language"
        className="form-select block w-full"
        onChange={changeLanguage}
      >
        <option value="en">English</option>
        <option value="gr">Greek</option>
      </select>
    </div>
  )
}

export default LanguageSelector
