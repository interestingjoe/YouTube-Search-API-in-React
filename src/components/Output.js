import React, { useState, useEffect } from 'react'
import Messages from '../statusMessages'

const Output = ({ statusMessage, searchValue }) => {
    console.log('searchValue', searchValue);

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

    return (
        <section className='output'>
            {
                setMessage(statusMessage)
            }            
            {/* <ul className='list'>
                <li>
                    <a className='image' href='/'>
                        <img className='thumbnail' src='/' alt='' />
                    </a>
                    <div className='copy'>
                        <h3 className='title'>
                            asdf
                        </h3>
                        <h3 className='description'>
                            asdf
                        </h3>
                    </div>
                    <p className='tags'>
                        asdf
                    </p>
                </li>
            </ul> */}
        </section>
    )
}

export default Output;
