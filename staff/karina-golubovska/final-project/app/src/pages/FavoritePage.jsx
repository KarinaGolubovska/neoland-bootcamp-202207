import { useState, useEffect } from 'react'
import Loggito from '../utils/Loggito'
import Header from '../components/Header'
import IconButton from '../components/IconButton'
import Favorites from '../components/Favorites'
import retrieveFavoriteLooks from '../logic/retrieveFavoriteLooks'
import retrieveUser from '../logic/retrieveUser'
import withContext from '../utils/withContext'
import LookModal from '../components/LookModal'
import { useNavigate, useLocation } from 'react-router-dom'


function FavoritePage({ context: { handleFeedback } }) {
    const logger = new Loggito('FavoritesPage')
    const [favorites, setFavorites] = useState(null)
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


                    return
                }
                setName(user.name)
                logger.debug('setName', user.name)
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
        loadFavoritesLooks()

    }, [])

    const loadFavoritesLooks = () => {
        try {
            retrieveFavoriteLooks(sessionStorage.token, (error, favorites) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)
                    return
                }
                setFavorites(favorites)
                logger.debug('setFavorites', favorites)
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }




    const handleLooksHomeClick = () => {

    }
    const handleLikeClick = () => {

    }
    const handleAccountClick = () => {
        navigate('/')
        logger.debug('navigate to home')

    }
    logger.info('return')
    return <div>

        <div className="Lookshome-page container container--full container--distributed">

            <Header />

            <main className="main">
                <Favorites favorites={favorites} />
            </main>
            <footer className="footer">
                {location.pathname === '/favorites' && <IconButton text='home' className="transparent-home--buttom" onClick={handleLooksHomeClick} />}
                {location.pathname === '/favorites' && <IconButton text='Account_Circle' className="transparent-account-buttom" onClick={handleAccountClick} />}
                {location.pathname === '/favorites' && <IconButton text='favorite' className="transparent-account-buttom" onClick={handleLikeClick} />}
            </footer>


        </div>
    </div>
}
export default withContext(FavoritePage) 