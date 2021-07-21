import React from 'react'

const Pagination = ({ items, paginationClick }) => {
    console.log('===', items[0]);
    const onClick = (param) => {
        paginationClick(param)
    }

    return (
        <>
            {
                items.nextPageToken !== undefined ?
                    <div className='pagination'>
                        {
                            items.map(item => {

                                console.log('===', item);

                                return <button id={item} onClick={() => onClick(item)}>{item}</button>
                            })
                        }
                    </div> :
                    ''
            }
            {/* {
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
            } */}
        </>
    )
}

export default Pagination;
