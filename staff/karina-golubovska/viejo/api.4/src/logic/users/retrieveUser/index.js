const {User} = require('../../../models')
const {NotFoundError , SystemError} = require('../../../errors')
const {validateObject} = require ('../../../validators')

function retrieveUser(userId) {
    validateObject(userId , 'user id')
   

    return User.findById(userId, 'name email').lean()
    .catch(error=>{
        throw new SystemError(error.message)
    })
    .then(user => {
        if(!user) throw new NotFoundError(`user with id ${userId}not found`)
        delete user._id
        return user
    })
}
module.exports = retrieveUser