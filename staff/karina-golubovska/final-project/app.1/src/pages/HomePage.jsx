import { useState, useEffect } from 'react'
import Loggito from '../utils/Loggito'
import retrieveUser from '../logic/retrieveUser'
import updateAvatar from '../logic/updateAvatar'
import createAvatar from '../logic/createAvatar'
import createPost from '../logic/createPost'
import updatePost from '../logic/updatePost'
import deletePost from '../logic/deletePost'
import retrievePosts from '../logic/retrievePosts'
import Settings from '../components/Settings'
import Header from '../components/Header'
import withContext from '../utils/withContext'
import PostList from '../components/PostList'
import Stats from '../components/Stats'
import NickName from '../components/NickName'
import Avatar from '../components/Avatar'

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

function HomePage({ onLogoutClick, context: { handleFeedback } }) {
    const logger = new Loggito('HomePage')
    const [name, setName] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [nick, setNick] = useState(null)
    const [posts, setPosts] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        logger.info('"componentDidMount"')
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    onLogoutClick()

                    return
                }
                setName(user.name)
                logger.debug('setNme', user.name)
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }, [])
    const loadPosts = () => {
        try {
            retrievePosts(sessionStorage.token, (error, post) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)
                    return
                }
                setPosts(posts)
                logger.debug('setPosts', posts)
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
    
            logger.warn(error.message)
        }
    }

    const handleAddClick = () => {
        try {
            createPost(sessionStorage.token , error=> {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)
                    return
                }
                loadPosts()
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }

    const handlePlusClick = () => {
        try {
            createAvatar(sessionStorage.token , error=> {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)
                    return
                }
                 loadAvatar()
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }
    const handleUpdateAvatar = (avatarId, imagen) => {
        try {
            updatePost(sessionStorage.token, avatarId, imagen, error => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)
                    return
                }
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }



    const handleUpdatePost = (postId, imagen) => {
        try {
            updatePost(sessionStorage.token, postId, imagen, error => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)
                    return
                }
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }
    const handleDeletePost = postId => {
        try {
            deletePost(sessionStorage.token, postId, error => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)
                    return
                }
                loadPosts()
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }

    const handleSettingsClick = () => {
        navigate('settings')

        logger.debug('navigate to settings')


    }
    const handleSettingsCloseClick = () => {
        navigate('/')
        logger.debug('navigate to list')
    }
    logger.info('return')
    return name ?
        <div className="home-page container container--full container--distributed">
            {
            /*<main> 
            <div className="top">
                    <div className='avatar'>
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png" alt="photo" />
                    </div>
                    <section className='nickName'>
                    <h2 className='nick'>golubovska</h2>
                    </section>
                    <span className='span'>hi everyone</span>
                
                </div>
                
                <div className='middle'>
                    <ul className='userDate' >
                        <li className='date' >
                            <span className ='looks'>looks</span>
                        </li>
                        <li>
                            <span className ='seguidores'>seguidores</span>
                        </li>
                        <li>
                            <span className ='seguidos'>seguidos</span>
                        </li>
                    </ul>
                </div>
                <div className='postList'>
                    <div className='container1'>
                        <div className='container1'>
                            <div className='container1.1'>
                                <a href="/p/CbyVfrcNPP1/"></a>
                            </div>
                            <div className='container1.2'>
                                <a href="/p/CbyVfrcNPP1/"></a>
                            </div>
                            <div className='container1.3'>
                                <a href="/p/CbyVfrcNPP1/"></a>
                            </div>
                        </div>
                        <div className='container2'>
                            <div className='container2.1'></div>
                            <div className='container2.2'></div>
                            <div className='container2.3'></div>
                        </div>
                        <div className='container3'>
                            <div className='container3.1'></div>
                            <div className='container3.2'></div>
                            <div className='container3.3'></div>
                        </div>
                    </div>
                </div>
                </main>
                <footer className="footer">
                <nav className='buttom'>

                </nav> 
                </footer>*/}
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} />

            <main className="main">
                <Routes>
                    <Route path="avatar" element={<Avatar avatar={avatar}  onUpdateAvatar={handleUpdateAvatar}  />} />
                    <Route path="nickName" element={<NickName nick={nick}/>} />
                    <Route path="userDate" element={<Stats />} />
                    <Route path="PostList" element={<PostList posts={posts}  onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />} />
                </Routes>
            </main>
            <footer className="footer">
                <Routes>
                    <Route path="setting" element={<Settings onCloseClick={handleSettingsCloseClick} />} />
                </Routes>
                {location.pathname === '/' && <button className="transparent-buttom" onClick={handleAddClick}>+</button> }
                {<button className="plus-buttom" onClick={handlePlusClick}>plus</button>}
            </footer>


        </div>
        :
        null
}

export default withContext(HomePage) 