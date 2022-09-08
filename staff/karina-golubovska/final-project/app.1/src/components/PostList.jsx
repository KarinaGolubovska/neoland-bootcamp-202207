import './PostList.css'
import Loggito from '../utils/Loggito'

function PostList({posts , onDeletePost , onUpdatePost}) {
    const logger = new Loggito('List')

    logger.info('render')

    return <ul className="PostList">
        {posts && posts.map(post => <li className="Postlist__item" key={post.id}>
            <button className="Notelist__item-delete-button" onClick={() => onDeletePost(post.id)}>x</button>

            <p suppressContentEditableWarning ="true" contentEditable="true" className="Postlist__item-text" onKeyUp={event => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutId = setTimeout(() => {
                    const text = event.target.innerText
                    
                    onUpdatePost(post.id, text)
                }, 500)
            }}>{post.text}</p>
        </li>)}
    </ul>
}
export default PostList 