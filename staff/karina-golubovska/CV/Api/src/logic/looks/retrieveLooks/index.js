const { User, Look } = require('../../../models')
const { NotFoundError, SystemError } = require('../../../../../errors/src')
const { verifyObjectIdString } = require('../../../utils')


function retriveLooks(userId) {
    verifyObjectIdString(userId, 'user id')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Look.find({ user: user._id }).lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
                .then(looks => {
                    // sanitize

                    looks.forEach(look => {
                        look.id = look._id.toString()
                        delete look._id
                        delete look.__v

                        look.items.forEach(item => {
                            item.id = item._id.toString()
                            delete item._id
                            delete item.__v
                        })
                    })

                    return looks
                })
        })


}
module.exports = retriveLooks


