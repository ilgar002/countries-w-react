import React, { useState, } from 'react';
import './Search.scss';
import { GoSearch } from 'react-icons/go'

const Search = ({ setCards, requestData }) => {
  const [inputValue, setInputValue] = useState('')

  const onChangeHandler = (e) => {
    if (e.target.value !== "") {
      requestData({ url: `https://restcountries.com/v3.1/name/${e.target.value}` }, (data) => setCards(data))
    }
    else {
      requestData({ url: `https://restcountries.com/v3.1/name/${e.target.value}` }, (data) => setCards(data))
    }
    setInputValue(e.target.value)
  }

  return (
    <div className="search-area">
      <GoSearch className='search-icon' />
      <form  className="searchByCountry">
        <input onChange={(e) => onChangeHandler(e)}
          type="text"
          placeholder="Search for a country..." value={inputValue} />
      </form>
    </div>
  )
}

export default Search