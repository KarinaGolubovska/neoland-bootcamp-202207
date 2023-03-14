import { useState, useEffect } from 'react'
import Loggito from '../utils/Loggito'
import Header from '../components/Header'
import IconButton from '../components/IconButton'
import Favourites from '../components/Favourites'
import withContext from '../utils/withContext'




import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
function FavouritePage({ context: { handleFeedback } }) {
    const logger = new Loggito('FavouritesPage')
    const [favourites, setFavourites] = useState(null)
    const navigate = useNavigate()

    const location = useLocation()
    const handleLooksHomeClick = () => {

    }
    const handleLikeClick = () => {

    }
    const handleAccountClick = () => {

    }
    logger.info('return')
    return <div>

        <div className="Lookshome-page container container--full container--distributed">

            <Header />

            <main className="main">
                <Routes>
                    <Route path="favourites" element={<Favourites favourites={favourites} />} />
                </Routes>
            </main>
            <footer className="footer">
                {location.pathname === '/' && <IconButton text='home' className="transparent-home--buttom" onClick={handleLooksHomeClick} />}
                {location.pathname === '/' && <IconButton text='Account_Circle' className="transparent-account-buttom" onClick={handleAccountClick} />}
                {location.pathname === '/' && <IconButton text='favorite' className="transparent-account-buttom" onClick={handleLikeClick} />}
            </footer>


        </div>
    </div>
}
export default withContext(FavouritePage) 