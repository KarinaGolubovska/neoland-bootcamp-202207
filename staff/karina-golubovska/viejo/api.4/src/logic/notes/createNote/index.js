const { User, Note } = require('../../../models')
const { NotFoundError, SystemError } = require('../../../errors')
const { validateString } = require('../../../validators')
const { validateObjectId } = require('../../../utils')

function createNote(userId , text='') {
    validateObjectId(userId, 'user id')
    validateString(text, 'text')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Note.create({ user: user._id })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(note => { })
        // це для того щоб зробити тест 

}
module.exports = createNote


