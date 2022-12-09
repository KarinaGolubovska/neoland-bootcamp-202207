import { Error } from 'errors'


const API_URL = process.env.REACT_APP_API_URL
function retrieveFavoriteLooks(token, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest
    xhr.onload = function () {
        const status = xhr.status
        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {
            const json = xhr.responseText
            const looks = JSON.parse(json)
            const { error } = looks
            callback(null, looks);
        };
    }
    xhr.open('GET', 'http://localhost:8080/api/looks/favorites')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}
export default retrieveFavoriteLooks