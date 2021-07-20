import React, { useState } from 'react';
import Search from './components/Search'
import Output from './components/Output';
import Pagination from './components/Pagination';
import Messages from './statusMessages'

function App() {
  const [statusMessage, setStatusMessage] = useState('')
  const [outputContent, setOutputContent] = useState('')
  const [urlGet, setUrlGet] = useState('')
  const api = 'https://content.googleapis.com/youtube/v3/'
  const paramPart = 'part=snippet';

  const getInput = input => {
    if (input === '') {
      setStatusMessage('')      
    } else {
      setStatusMessage(Messages.load)
    }

    // If search input is blank then it resets output.
    if (input === '') {
      setOutputContent('')
      return;
    }

    // Fetches from API.
    let url = `${api}search?${paramPart}&key=${process.env.REACT_APP_API_KEY}&q=${encodeURIComponent(input.trim())}`;
    fetchPromise(url);
    setUrlGet(url)
  }

  const fetchAPI = async (api) => {
    if (api === undefined || api === '') {
        return;
    }
    let response = await fetch(api);
    return response.json();
  }

  const fetchPromise = url => {
    fetchAPI(url)
        .then(async response => {
            console.log('1st response', response);

            if (response.items.length > 0) {
              setOutputContent(response)

              // Fetches Video Tags
              let arr = [];
              for (const key in response.items) {
                  if (response.items[key]['id']['videoId'] === undefined) {
                      continue;
                  }
                  let url = `${api}videos?${paramPart}&key=${process.env.REACT_APP_API_KEY}&id=${response.items[key]['id']['videoId']}`;
                  let item = await fetchAPI(url);
                  arr.push(item);
              }
              return await Promise.all(arr);
            } else {
              console.log('1 false');
              // main.createMessage('warning', 'No matching videos');
            }
        })
        .then(response => {
            console.log('2nd response', response);
            if (response.length > 0) {
                console.log('true');
                // If Video Tags exists in payload then render onto page.
                for (const key in response) {
                    if (
                        response[key]['items'][0]['id'] === undefined || 
                        (response[key]['items'][0]['snippet']['tags'] === undefined || response[key]['items'][0]['snippet']['tags'] === [])
                    ) {
                        continue;
                    }

                    renderVideoTags(response[key])
                }
            } else {
                console.log('false');
                // If Video Tags don't exist then display message.
                if (document.getElementsByClassName('list')[0] === undefined) {
                    return;
                }

                // main.createMessage('warning', 'No available tags');
            }
        })
        .catch(() => {
          console.log('Error');
          // main.createMessage('error', 'Error fetching data');
        });
  }

  const renderVideoTags = item => {
    // Checks if this item already has Video Tags. If not then it renders it.
    if (document.getElementById(item['items'][0]['id']).children[2] !== undefined) {
      return;
    }

    let p = document.createElement('p')
    p.classList.add('tags')
    let copy = item['items'][0]['snippet']['tags']
    p.innerHTML = '<strong>Video Tags:</strong> ' + copy.join(', ')
    document.getElementById(item['items'][0]['id']).appendChild(p)
  }

  return (
    <>
      <Search getInput={getInput} />
      <Output statusMessage={statusMessage} outputContent={outputContent} />
      <Pagination outputContent={outputContent} url={urlGet} func={fetchPromise} />
    </>
  );
}

export default App;
