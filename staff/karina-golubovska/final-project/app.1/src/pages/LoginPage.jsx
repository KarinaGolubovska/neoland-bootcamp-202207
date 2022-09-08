import  Loggito from '../utils/Loggito'
import authenticateUser from '../logic/authenticateUser'
import withContext from '../utils/withContext'

function LoginPage({ onLinkClick , onLogIn , context: { handleFeedback }}){
    const logger = new Loggito(LoginPage.name)
logger.info('constructor')
logger.info('return')

const handleLinkClick = event =>{
    event.preventDefault()

    onLinkClick()
}
const handleFormSubmit = event =>{
    event.preventDefault()
    debugger
    const form = event.target

    const emailInput =form.email
    const passwordInput = form.password

    const email = emailInput.value
    const password = passwordInput.value 
    try {
        authenticateUser(email, password, (error, token) => {
            if (error) {
                alert(error.message)
                handleFeedback({ message: error.message, level: 'error'})

                logger.warn(error.message)

                return
            }

            logger.debug('user logged in')

            sessionStorage.token = token

            onLogIn()
        })
    } catch (error) {
        handleFeedback({ message: error.message, level: 'error'})

        logger.warn(error.message)
    }

}

return <main className="login-page container container--full container--spaced">
        <form className="form" action="https://www.google.com/search" method="get" onSubmit={handleFormSubmit}>
        {/* <img className='imgHeader imagine' src="https://cdn-icons-png.flaticon.com/512/895/895914.png"/> */}
            <div className="form__field">
                <label className="label">email</label>
                <input className="input" type="email" name="email" placeholder="email" id="email" />
            </div>

            <div className="form__field">
            <label className="label">password</label>
                <input className="input" type="password" name="password" placeholder="password" id="password" />
            </div>

            <button className="button" type="submit">Login</button>
        </form>

        <a className="anchor" href="register.html" onClick={handleLinkClick}>Register</a>
    </main>
}
export default withContext(LoginPage) 