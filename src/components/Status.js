import Messages from '../statusMessages'
import '../scss/reset.scss'
import '../component-scss/status.scss'

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
