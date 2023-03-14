import './LookList.css'
import Loggito from '../utils/Loggito'

function LookList({ looks, onClickLook  }) {
    const logger = new Loggito('List')


    logger.info('render')

    return <ul className="LookList">
        {looks && looks.map(look =>
            <li className="Looklist__item" key={look.id} onClick={() => onClickLook(look)} >
                 {/* <img className="Looklist__item-photo" >
                    {look.photo}</img>  */}

                    <img alt='look' src={look.photo} >
                    </img> 
            </li>)}
    </ul>
}
export default LookList 