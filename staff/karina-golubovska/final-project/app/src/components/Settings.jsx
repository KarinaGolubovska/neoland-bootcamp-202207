import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import updateUserPassword from '../logic/updateUserPassword'


function Settings({onCloseClick, onFeedback}) {
    const logger = new Loggito('Settings')

    logger.info('render')

    const handleFormSubmit = event => {
        event.preventDefault()

        // const {target: {oldPassword:{value:oldPassword}, newPassword:{value:newPassword}, newPasswordRepeat:{value:newPasswordRepeat}}} = event
        const { target: form } = event

        const {
            oldPassword: { value: oldPassword },
            newPassword: { value: newPassword },
            newPasswordRepeat: { value: newPasswordRepeat },
            
        } = form

        try {
            updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error => {
                if (error) {
                    onFeedback({message:error.message, level: 'warning'})
                    
                    logger.warn(error.message)

                    return
                }
                onFeedback({message:`Password update`, level: 'success'})
                form.reset()
                onCloseClick()
                
            })
        } catch(error) {
            onFeedback({message:error.message, level: 'warning'})

            logger.warn(error.message)
        }}
        

    logger.info('return')

        return <div className="Settings container">

            <form className="update-password-form form" onSubmit={handleFormSubmit}>

                <div className="form__field">
                    <label htmlFor="oldPassword">Current password</label>
                    <input className="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword" />
                </div>

                <div className="form__field">
                    <label htmlFor="newPassword">New password</label>
                    <input className="input" type="password" name="newPassword" placeholder="new password" id="newPassword" />
                </div>

                <div className="form__field">
                    <label htmlFor="newPasswordRepeat">Repeat new password</label>
                    <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat" />
                </div>
                

                

                

                <button className="button" type="submit">Update</button>
            </form>
            <IconButton text="home" onClick={onCloseClick} />
        </div>
    }
export default Settings