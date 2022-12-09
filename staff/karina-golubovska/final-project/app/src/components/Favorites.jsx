import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
// import {retrieveFavorites} from "../logic/retrieveFavorites"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import "./Favorites.css"
import LookModal from "./LookModal"





function Favorites({ context: { handleFeedback }, favorites, }) {
  const logger = new Loggito('FavList')
  const navigate = useNavigate()
  const [look, setLook] = useState();


  logger.info('render')

  const handleLookClick = (look) => setLook(look);

  return <ul className="favorite">
    <li className="Menu__item">
    </li>
    {favorites &&
      favorites.map((look) => {
        return <li className="favorites" key={look._id}>

          <div className="favorite_container ">
            <div className="lookModal_img">
              <img className="favorite favoriteImagen" onClick={() => { handleLookClick(look); }} src={look.photo} />

            </div>
            <a className="Url" href={`/looks/${look.id}`} target="_blank">

            </a>
          </div>
        </li>;
      })}
    {look && <LookModal look={look} favorites={favorites} />}
  </ul>

}


export default withContext(Favorites)




