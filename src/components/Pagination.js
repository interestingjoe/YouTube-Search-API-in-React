import React from 'react'

const Pagination = ({ outputContent, url, func}) => {
    console.log('pagination outputContent', outputContent)

    const render = (outputContent, url) => {
        console.log('pagination urlGet', url)

    }

    return (
        <>
            {
                url !== '' && outputContent.items !== undefined ? 
                    render(outputContent, url) :
                    ''
            }
        </>
    )
}

export default Pagination;
