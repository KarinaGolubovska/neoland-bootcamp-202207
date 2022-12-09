import './LookModal.css'
import Loggito from '../utils/Loggito'
import { useState } from 'react'


function LookModal({ look, onClose}) {
    const [showItems, setShowItems] = useState(false)

    const logger = new Loggito('LookModal')

    const handleShowItems = () => {
        if (showItems) return setShowItems(false)

        setShowItems(true)
    }
    

    logger.info('return')
    // return <div className='LookModal' onClickModalLook={() => onClickModalLook(modalLook)}>
    return <div className='LookModal'>
        <div className="Look_Modal container container--spaced container--padded" >

            <div className="content"  >
                <img className="photo" alt='look' src={look.photo} />
                {showItems && look.items.map((item, index) => <a className="item" style={{ left: item.coords[0], bottom: item.coords[1] }} href={item.url}>{index}</a>)}
            </div>
            <div className='buttom-part'>
                <div className='container3'>
                
            <p className='description'>{look.description}</p>
            
            
            
            </div>
            <div className='container4'>
             
            <button className='show-items'onClick={handleShowItems}>{showItems ? 'Hide ' : 'Show'}</button>
            <button className="close-button" onClick={onClose}>x</button>
            
            </div>
            </div>
        </div>
    </div>
}
export default LookModal
