
import { validateEmail, validatePassword, validateCallback } from 'validators'
import { AuthError, ClientError, ServerError, UnknownError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        const json = xhr.responseText

        const { error, token } = JSON.parse(json)

        switch(true) {
            case (status >= 500):
                callback(new ServerError(error))
                break
            case (status === 401):
                callback(new AuthError(error))
                break
            case (status >= 400): 
                callback(new ClientError(error))
                break
            case (status === 200):
                callback(null, token)
                break
            default:
                callback(new UnknownError(`unexpected status ${status}`))
        }
    }

    xhr.onerror = function() {
        callback(new ServerError('connection failed'))
    }
    xhr.open('POST', `${API_URL}/users/auth`)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{ "email": "${email}", "password": "${password}"}`)

}
export default authenticateUser


