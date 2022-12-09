import { validateText, validateString, validateCallback } from 'validators'
import { AuthError, ClientError, ServerError, UnknownError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function searchLooks(token, query, callback) {
    validateText(token, 'token')
    validateString(query, 'query')
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    

    xhr.onload = function () {
        const status = xhr.status

        const json = xhr.responseText

        const looks = JSON.parse(json)
        const { error } = looks

        switch (true) {
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
                callback(null, looks.reverse())
                break
            default:
                callback(new UnknownError(`unexpected status ${status}`))
        }
    }

    

    xhr.open('GET', `${API_URL}/looks/search?q=${query}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default searchLooks