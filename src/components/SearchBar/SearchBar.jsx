import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const SearchBar = () => {
  return (
    <div className="flexCenter search-bar">
        <HiOutlineLocationMarker color="var(--blue)" size={25}/>
        <input type="text" />
        <button className="button">Search</button>
    </div>
  )
}

export default SearchBar