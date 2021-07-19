import React, { useState } from 'react'

const Search = ({ getInput }) => {
    const [value, setValue] = useState('')
    let hasValue = value.length > 0 ? true : false;

    const onChange = (e) => {
        setValue(e.target.value)
        getInput(e.target.value)
    }

    const onClick = () => {
        getInput(value)
    }

    const clearValue = () => {
        setValue('')
        getInput('')
    }

    return (
        <section className='search'>
            <h1>YouTube Search</h1>
            <input id='input' name='search-bar' type='text' value={value} onChange={onChange} />
            <button id='search' onClick={onClick}>Search</button>
            {
                hasValue && <button id='clear' onClick={clearValue}>Clear</button>
            }
        </section>
    )
}

export default Search;
