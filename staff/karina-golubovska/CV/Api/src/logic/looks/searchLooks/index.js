const { User, Look } = require('../../../models')
const { NotFoundError, SystemError } = require('../../../../../errors')
const { verifyObjectIdString } = require('../../../utils')
const { validateString } = require('../../../../../validators')


function searchLooks(userId, query) {
    verifyObjectIdString(userId, 'user id')
    validateString(query)

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const criteria = new RegExp(query)

            return Look.find({
                user: userId,
                $or: [
                    { description: { $regex: criteria } },
                    // TODO correct following matchers with items. they do not work
                    { "items.description": { $regex: criteria } },
                    { "items.category": { $regex: criteria } }
                ]
            }, 'title description visibility photo createdAt modifiedAt').lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(looks => {
            looks.forEach(look => {

                look.id = look._id.toString()

                delete look.description

                delete look._id

                delete look.__v
            })

            return looks
        })
}

module.exports = searchLooks