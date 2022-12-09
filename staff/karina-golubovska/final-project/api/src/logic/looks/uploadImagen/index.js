const { User, Look } = require('../../../models')
const { verifyObjectIdString } = require('../../../utils')

function uploadImagen(userId , src=''){
    verifyObjectIdString(userId, 'user id')
    validateString(src, 'src')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Look.uploadImagen({ user: user._id, src })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(look => { })
}

module.exports = uploadImagen
