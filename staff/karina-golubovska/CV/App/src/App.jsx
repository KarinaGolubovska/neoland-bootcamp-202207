import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import RecomendationPage from './pages/RecomendationPage'
import FavouritePage from './pages/FavouritePage'
import Settings from './components/Settings'
import Feedback from './components/Feedback'
import Loggito from './utils/Loggito.js'
import Context from './utils/Context'
import './App.css'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'


function App() {
    const logger = new Loggito('App')


    const [feedback, setFeedback] = useState({ message: null, level: null })
    const navigate = useNavigate()
    const handleNavigationToRegister = () => {
        navigate('register')

        logger.debug('navigate to register')
    }
    const handleNavigationToLogin = () => {
        navigate('login')

        logger.debug('navigate to login')
    }
    const handleNavigationToHome = () => {
        navigate('/')

        logger.debug('navigate to home')
    }
    const handleLookRecomendationClick =()=>{
        navigate ('looks')
        logger.debug('navigate to looks')
    }
    const handleFavouriteClick =()=>{
        navigate ('favourites')
        logger.debug('navigate to favourites')
    }


    const handleLogoutClick = () => {
        delete sessionStorage.token

        handleNavigationToLogin()
    }
    const handleAcceptFeedback = () => {
        const feedback = { message: null, level: null }
        setFeedback(feedback)
        logger.debug('setFeedback', feedback)
    }
    const handleFeedback = feedback => {
        setFeedback(feedback)
        logger.debug('setFeedback', feedback)
    }
    logger.info('return')
    const toggleTheme = () => document.documentElement.classList.toggle('light')

    return <Context.Provider value={{ handleFeedback, toggleTheme }}>
        <div className="App App--dark container container--full">
            <Routes>
                <Route path="/*" element={sessionStorage.token ? <HomePage onLogoutClick={handleLogoutClick} /> : <Navigate to="login"  onClick={handleLookRecomendationClick}  />} />
                <Route path="/*" element={sessionStorage.token ? <HomePage  onLookRecomendationClick={handleLookRecomendationClick} /> : <Navigate to="looks"   />} />
                <Route path="/*" element={sessionStorage.token ? <HomePage  onLikeClick={handleFavouriteClick} /> : <Navigate to="favourites"   />} />
                <Route path="login" element={sessionStorage.token ? <Navigate to="/" /> : <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />} />
                <Route path="register" element={sessionStorage.token ? <Navigate to="/" /> : <RegisterPage onLinkClick={handleNavigationToLogin} />} />
                <Route path="settings" element={<Settings onLinkClick={handleNavigationToHome}/>} />
                <Route path="looks" element={ <RecomendationPage  />} />
                <Route path="favourites" element={ <FavouritePage  />} />

                {/* <Route path="looks-page"element={sessionStorage.token ? <LooksPage onSecondHomeClick={HandleSecondHomeClick}/> */}

            </Routes>
            {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}
        </div>
    </Context.Provider>
}
export default App



