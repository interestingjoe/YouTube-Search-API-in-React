import React from 'react'

const Pagination = ({ response, paginationClick }) => {
    const onClick = (param) => {
        paginationClick(param)
    }

    return (
        <>
            {
                response.prevPageToken !== undefined || response.nextPageToken !== undefined ?
                    <div className='pagination'>
                        {
                            response.prevPageToken !== undefined ?
                            <button id='PREV' onClick={() => onClick(response.prevPageToken)}>PREV</button> :
                            ''
                        }
                        {
                            response.nextPageToken !== undefined ?
                            <button id='NEXT' onClick={() => onClick(response.nextPageToken)}>NEXT</button> :
                            ''
                        }
                    </div> :
                    ''
            }
        </>
    )
}

export default Pagination;
