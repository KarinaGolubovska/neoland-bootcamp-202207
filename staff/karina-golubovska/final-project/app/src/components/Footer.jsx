import { useState } from 'react'
import './Footer.css'
import Add from './LookAddModal'
import Loggito from '../utils/Loggito'

function Footer({  view: viewHome }) {
    const logger = new Loggito('Footer')
    const [view, setView] = useState(null)

   
    const handleAddClick = () => {
        logger.debug('setView', 'add')
        setView('add')
    }

     const handleHomeClick = () => {
         logger.debug('setView', 'home')
         setView('null')
     }



    // const handleHeartClick = () => {
    //     setView(null)
    //     logger.debug('setView', 'Likes')

    //     setView('FavoritePage')
    //}
    logger.info('render')

    return <footer className="footer container">
        <div className="footer-top container container--row container--distributed">
            {view === null && <IconButton text="add" onClick={handleAddClick} />}
            {view === 'add' && <Add  handleHomeClick={handleAddClick}  view={viewHome}/>}
            
        </div>
    </footer>
}
export default Footer