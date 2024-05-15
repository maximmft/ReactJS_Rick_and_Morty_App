import { useState } from 'react'
import './SearchBar.css'
import { useTheme } from '../contexts/theme'

function SearchBar ({text, handleSearch}) {

    const {theme} = useTheme();

    return(
        <section className='searchbar-section'>
        <div className="searchbar"> 
            <input className={theme === "dark" ? "input-dark" : "input-light"} type="text" placeholder="Trouvez un personnage..." onChange={handleSearch}></input> 
        </div>
        </section>
    )
}

export default SearchBar