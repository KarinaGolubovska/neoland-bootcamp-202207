import Loggito from '../utils/Loggito'
import'./NickName.css'
import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'
function NickName() {
    const[name, setName] = useState(null)
    const logger = new Loggito('Avatar')

    useEffect(() => {
        logger.info('componentDidMount')

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    // handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }
                setName(user.name)

                logger.debug('setName', user.name)
            })
        } catch (error) {
            // handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }, [])

    logger.info('render')

    return  <div className="nickname">
    <p>{name}</p>
</div>
}


export default NickName


