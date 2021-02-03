import React from 'react';
import './search-bar.css';

export const SearchBar = ({ placeholder, handleChange }) => {

    return (
        <input 
            type="search" 
            className="search-field" 
            placeholder={placeholder} 
            onChange={handleChange}
        />
    )
}