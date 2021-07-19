import React, { useState } from 'react';
import Search from './components/Search'
import Output from './components/Output';
import Messages from './statusMessages'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const getInput = (input) => {
    if (input === '') {
      setStatusMessage('')      
    } else {
      setStatusMessage(Messages.load)
    }

    setSearchValue(input)
  }

  return (
    <>
      <Search getInput={getInput} />
      <Output statusMessage={statusMessage} searchValue={searchValue} />
    </>
  );
}

export default App;
