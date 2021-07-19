import React, { useState } from 'react'

const Search = () => {
    const [value, setValue] = useState('')

    const onChange = () => {
        console.log(111);
    }

    return (
        <section className='search'>
            <h1>YouTube Search</h1>
            <input id='input' name='search-bar' type='text' value={value} onChange={onChange} />
            <button id='search'>Search</button>
            <button id='clear'>Clear</button>
        </section>
    )
}

export default Search;
