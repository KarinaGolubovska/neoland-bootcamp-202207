import { useState, useEffect } from 'react'
import Loggito from '../utils/Loggito'
import retrieveUser from '../logic/retrieveUser'
import retrieveLooks from '../logic/retrieveLooks'
import Settings from '../components/Settings'
import Header from '../components/Header'
import withContext from '../utils/withContext'
import Stats from '../components/Stats'
import LookList from '../components/LookList'
import IconButton from '../components/IconButton'
import LookAddModal from '../components/LookAddModal'
import createItems from '../logic/createItems'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import LookModal from '../components/LookModal'

function HomePage({ onLogoutClick, context: { handleFeedback } }) {
    const logger = new Loggito('HomePage')

    const [name, setName] = useState(null)
    const [looks, setLooks] = useState(null)
    const [modalLook, setModalLook] = useState(null)

    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
        logger.info('"componentDidMount"')
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    onLogoutClick()

                    return
                }
                setName(user.name)
                logger.debug('setName', user.name)
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
        loadLooks()

    }, [])
    const loadLooks = () => {
        try {
            retrieveLooks(sessionStorage.token, (error, looks) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)
                    return
                }
                setLooks(looks)
                logger.debug('setLooks', looks)
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }


    const handleLookClick = () => {
        try {
            createItems(sessionStorage.token, error => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)
                    return
                }

            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }

    const handleOpenLook = (look) => {
        setModalLook(look)
    }



    const handleCloseLook = () => {
        setModalLook(null)
    }


    const handleSettingsClick = () => {
        navigate('settings')

        logger.debug('navigate to settings')

    }
    const handleAddClick = () => {
        navigate('new-look')

        logger.debug('navigate to add')
    }
    const handleCloseAddLook = () => {
        navigate('/')
        logger.debug('navigate to list')

    }

    const handleLookRecomendationClick = () => {
        navigate('looks')
        logger.debug('navigate to recomendation')
    }
    const handleFavouriteClick = () => {
        navigate('favourites')
        logger.debug('navigate to favourites')
    }
    const handleAccountClick = () => {

    }
    // const handleSettingsCloseClick = () => {
    //     navigate('/')
    //     logger.debug('navigate to list')
    // }
    logger.info('return')
    return <div>

        <div className="home-page container container--full container--distributed">

            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} />
            {/* <Avatar name={name} avatarPicture={avatarPicture} /> */}
            <main className="main">


                <Routes>
                    <Route path="/*" element={<LookList looks={looks} onClickLook={handleOpenLook} />} />

                    <Route path="/stats" element={<Stats />} />
                </Routes>

                {location.pathname === "/new-look" && <LookAddModal onCloseAddLook={handleCloseAddLook} onClickLook={handleLookClick} />}
                {modalLook && <LookModal look={modalLook} onClose={handleCloseLook} />}
            </main>
            
            <footer className="footer">

                {location.pathname === '/' && <IconButton text='add' className="transparent-buttom" onClick={handleAddClick} />}
                {location.pathname === '/' && <IconButton text='home' className="transparent-home--buttom" onClick={handleLookRecomendationClick} />}
                {location.pathname === '/' && <IconButton text='Account_Circle' className="transparent-account-buttom" onClick={handleAccountClick} />}
                {location.pathname === '/' && <IconButton text='favorite' className="transparent-account-buttom" onClick={handleFavouriteClick} />}
            </footer>

           


        </div>
    </div>
}

export default withContext(HomePage) 