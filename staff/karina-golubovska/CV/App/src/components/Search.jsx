import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import './Search.css'

function Search({ onQuery }) {
    const logger = new Loggito('Search')

    const handleSubmit = event => {
        event.preventDefault()

        const query = event.target.query.value

        onQuery(query)
    }

    logger.info('return')

    return <form className="search-button" onSubmit={handleSubmit}>
        <input className="input-search"  placeholder="look for a look"type="text" name="query"/>
        <IconButton text="search" />
    </form>
}

export default Search