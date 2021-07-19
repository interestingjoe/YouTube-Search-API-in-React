import React, { useState } from 'react';
import Search from './components/Search'
import Output from './components/Output';

function App() {
  const [searchValue, setSearchValue] = useState('')

  const getInput = (e) => {
    setSearchValue(e)
  }

  return (
    <>
      <Search getInput={getInput} />
      <Output searchValue={searchValue} />
    </>
  );
}

export default App;
