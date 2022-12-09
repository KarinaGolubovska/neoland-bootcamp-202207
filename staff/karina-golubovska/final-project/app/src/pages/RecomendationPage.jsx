import { useState, useEffect } from 'react'
import Loggito from '../utils/Loggito'
import Header from '../components/Header'
import IconButton from '../components/IconButton'
import withContext from '../utils/withContext'
import Search from '../components/Search'
import searchLooks from '../logic/searchLooks'
import addFavorites from '../logic/addFavorites'
import { useNavigate, useLocation } from 'react-router-dom'
// import { users } from '../logic/'
function RecomendationPage({ }) {
    const logger = new Loggito('RecomendationPage')
    const [looks, setLooks] = useState(null)
    const navigate = useNavigate()
    const [query, setQuery] = useState(null);
    const [showItems, setShowItems] = useState(false)
    const location = useLocation()

    const handleFavoriteClick = (lookId) => {
        addFavorites(sessionStorage.token, lookId, (error) => {
            if (error) throw new Error("could not update favorites")
            if (!error) alert("favorites updates successfully")
            console.log("favorites updates successfully")
        })
    }


    useEffect(() => {
        logger.info("on query changed");

        try {
            searchLooks(sessionStorage.token, query, (error, looks) => {
                if (error) {
                    // handleFeedback({ message: error.message, level: "error" });

                    logger.warn(error.message);

                    return looks;
                }

                setLooks(looks);

                logger.debug("setLooks", looks);
            });
        } catch (error) {

            logger.warn(error.message);
        }
    }, [query]);

    const handleGoToFavoritesClick = () => {
        navigate('favorites')
        logger.debug('navigate to favorites')

    }
    const handleAccountClick = () => {
        navigate('/')
        logger.debug('navigate to home')
    }
    const handleShowItems = () => {
        if (showItems) return setShowItems(false)

        setShowItems(true)
    }

    logger.info('return')
    const handleSearch = (query) => setQuery(query);



    return <div>

        <div className="Lookshome-page container container--full container--distributed">

            <Header />

            <main className="main">
                <Search onQuery={handleSearch} />
                {looks && looks.map((look) => {
                    return <li className='list_looks' key={look.id} >
                        <div>
                            <img className="found_look" alt='look' src={look.photo} />
                            {showItems && look.items && look.items.map((item, index) => {
                                return <a className="item" style={{ left: item.coords[0], bottom: item.coords[1] }} href={item.url}>{index}</a>
                            })}
                        </div>
                        <div>
                            <button className='show-items' onClick={handleShowItems}>{showItems ? 'Hide ' : 'Show'}</button>
                            <IconButton text='favorite' className="transparent-account-buttom" onClick={() => handleFavoriteClick(look._id)} />
                        </div>
                    </li>
                })}

            </main>
            <footer className="footer">
                {/* {location.pathname === '/looks' && <IconButton text='home' className="transparent-home--buttom" onClick={handleLookRecomendationClick} />} */}
                {location.pathname === '/looks' && <IconButton text='Account_Circle' className="transparent-account-buttom" onClick={handleAccountClick} />}
                {location.pathname === '/looks' && <IconButton text='favorite' className="transparent-account-buttom" onClick={handleGoToFavoritesClick} />}
            </footer>


        </div>
    </div>
}
export default withContext(RecomendationPage)
