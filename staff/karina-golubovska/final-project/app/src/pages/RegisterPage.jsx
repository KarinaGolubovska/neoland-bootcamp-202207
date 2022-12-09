import Loggito from '../utils/Loggito'
// import registerUser from '../logic/registerUser'
// import authenticateUser from '../logic/authenticateUser'

function RegisterPage(props) {
    const logger = new Loggito(RegisterPage.name)
    logger.info('constructor')
    const handleLinkClick = event => {
        event.preventDefault()
        props.onLinkClick()
    }

    logger.info('render')
    return <div>
        <main className="register-page container container--full container--spaced">
            <form className="form">
                <div className="form__field">

                    <input className="input" type="text" name="name" placeholder="name" id="name" />
                </div>

                <div className="form__field">

                    <input className="input" type="email" name="email" placeholder="email" id="email" />
                </div>

                <div className="form__field">

                    <input className="input" type="password" name="password" placeholder="password" id="password" />
                </div>

                <button className="button" type="submit">Register</button>
            </form>

            <a className="anchor" href="login.html" onClick={handleLinkClick}>Login</a>
        </main>
    </div>

}
export default RegisterPage