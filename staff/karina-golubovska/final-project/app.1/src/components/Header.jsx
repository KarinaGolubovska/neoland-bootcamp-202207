import { useState} from 'react'
import './Header.css'
import Menu from './Menu'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'


function Header({ name, onLogoutClick, onSettingsClick, view: viewHome }) {
    const logger = new Loggito('Header')
    const [view, setView] = useState(null)


    const handleMenuClick = () => {
        logger.debug('setView', 'menu')

        setView ('menu')
    }
    const handleCloseClick = () => {
        setView(null)
        logger.debug('setView', null)
    }
    const handleSettingsClick = () => {
        setView(null)
        logger.debug('setView', null)

        onSettingsClick()
    }
    logger.info('render')

        return <header className="header container">
            <div className="header-top container container--row container--distributed">
                <img className='imgHeader' src="https://i.pinimg.com/564x/be/67/0c/be670c58462857121ae23c0d6a364a1f.jpg"/>
                {/* <h1 className="title">Hello, {name}!</h1> */}

                {view === null && <IconButton text="menu" onClick={handleMenuClick} />}
                {view === 'menu' && <IconButton text="close" onClick={handleCloseClick} />}
            </div>

            {view === 'menu' && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
        </header>
    }
export default Header