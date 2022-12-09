import { useState } from 'react'
import './Header.css'
import Menu from './Menu'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import Avatar from './Avatar'
import NickName from './NickName'


function Header({ onLogoutClick, onSettingsClick, view: viewHome }) {
    const logger = new Loggito('Header')
    const [view, setView] = useState(null)



    const handleMenuClick = () => {
        logger.debug('setView', 'menu')

        setView('menu')
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

    return <header className="header-container">
        <div className="header-top ">
            <div className='container1'>
                <div className='logo'>
                    <img className='imgHeader' src="https://www.bing.com/images/blob?bcid=qEDmjbR2wq8EWVrM-7fhs0ByVXog.....wA"/>
                </div>
                {<Avatar />}
                {view === null && <IconButton text="menu" onClick={handleMenuClick} />}
                {view === 'menu' && <IconButton text="close" onClick={handleCloseClick} />}
            </div>
            <div className='container2'>
                {<NickName />}
            </div>
            {view === 'menu' && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
        
        </div>

        
    </header>
}
export default Header

{/* <h1 className="title">Hello, {name}!</h1> */ }