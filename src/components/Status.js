import Messages from '../statusMessages'

const Status = status => {
    let className = status.status === Messages.error ? 'error' : 'warning'

    return (
        <>
            {
                status.status !== '' ?
                <p className={className}>{status.status}</p> :
                ''
            }
        </>

    )
}

export default Status;
