function registerUser(name, email, password, callback) {

    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty')
    if (email.length < 6) throw new Error('email lenght not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty')
    if (password.length < 8) throw new Error('password lenght is less than 8 characters ')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    const xhr = new XMLHttpRequest

    xhr.onload = function() {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 201) 
        
            callback(null)            
    }

    
    
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{ "name": "${name}", "username": "${email}", "password": "${password}"}`)

}
// registerUser("Karina Golubovska" , "karina963@golubovska.com" , "123123123", console.log)



































    /*xhr.onload = function() {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 201) 
            callback(null)            
    }

    // request
    
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{ "name": "${name}", "username": "${email}", "password": "${password}"}`) */



















    
    /*const user = users.find(function (user) {
        return user.email === email
    })
    if (user) {
        callback(new Error('user already exists'))
        return
    }

    users.push({
        name: name,
        email: email,
        password: password
    })
    callback(null)*/
