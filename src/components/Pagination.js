import '../component-scss/pagination.scss'

const Pagination = ({ data, paginationClick }) => {
    let renderButton = (value, copy) => {
        return <button id={copy.toLowerCase()} onClick={() => onClick(value)}>{copy}</button>
    }
    
    const onClick = param => {
        paginationClick(param)
    }

    return (
        <>
            {
                data.prevPageToken !== undefined || data.nextPageToken !== undefined ?
                <div className='pagination'>
                    {
                        data.prevPageToken !== undefined ?
                            renderButton(data.prevPageToken, 'PREVIOUS') :
                            ''
                    }
                    {
                        data.nextPageToken !== undefined ?
                            renderButton(data.nextPageToken, 'NEXT') :
                            ''
                    }
                </div> :
                ''
            }
        </>
    )
}

export default Pagination;
