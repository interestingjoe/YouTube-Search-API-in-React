import React, { useState, useEffect } from 'react'
import Messages from '../statusMessages'

const Output = ({ statusMessage, outputContent }) => {
    const setMessage = (statusMessage) => {
        if (statusMessage === Messages.error) {
            return <p className='error'>{statusMessage}</p>
        }

        if (statusMessage === Messages.video) {
            return <p className='warning'>{statusMessage}</p>
        }

        if (statusMessage !== '') {
            return <p className='warning'>{statusMessage}</p>
        }
    }

    const renderOutput = outputContent => {
        let items = outputContent.map((item) => {
            let videoId = `${item.id.videoId}`
            let anchor = `https://www.youtube.com/watch?v=${videoId}`
            let title = `${item['snippet']['title']}`

            return <li key={videoId} id={videoId}>
                    <a className='image' href={anchor}>
                        <img className='thumbnail' src={item['snippet']['thumbnails']['default']['url']} alt={title} />
                    </a>
                    <div className='copy'>
                        <h3 className='title'>
                            {title}
                        </h3>
                        <h4 className='description'>
                            {item['snippet']['description']}
                        </h4>
                    </div>
                </li>
        })

        return <ul className='list'>{items}</ul>
    }

    return (
        <section className='output'>
                {
                    outputContent.items !== undefined ? 
                        renderOutput(outputContent.items) :
                        ''
                }
        </section>
    )
}

export default Output;
