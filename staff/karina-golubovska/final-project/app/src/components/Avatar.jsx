import './Avatar.css'
import Loggito from '../utils/Loggito'
import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'

function Avatar() {
    const [photo, setPhoto] = useState(null)
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
                setPhoto(user.photo)

                logger.debug('setPhoto', user.photo)
            })
        } catch (error) {
            // handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }, [])

    logger.info('render')

    return <div className="avatar">
        
         <img className = 'avatar_photo'alt='avatar' src={photo} />
        
    </div>
}


export default Avatar


{/* <div className="avatar_nickname">
                    <p>{user.name}</p>
                </div> */}