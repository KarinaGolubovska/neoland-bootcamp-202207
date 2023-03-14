const { User, Look } = require("../../../models");
const { Types: { ObjectId } } = require("mongoose");
const { SystemError, NotFoundError } = require("errors");
const { verifyObjectIdString } = require("../../../utils");
const { user } = require("../../../models/schemas");

function toggleFavoriteLook(userId, lookId) {
    verifyObjectIdString(userId, 'user id')
    verifyObjectIdString(lookId, 'look id')

    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Look.findById(lookId)
                .catch((error) => {
                    throw new SystemError(error.message);
                })
                .then((look) => {
                    if (!look) throw new NotFoundError(`look with id ${lookId} not found`);

                    const index = look.favorites.findIndex(user => user.toString() === userId)

                    if (index === -1) {
                        look.favorites.push(userId)

                        user.favorites.push(lookId)
                    } else {
                        look.favorites.splice(index, 1)

                        const lookIndexInUserFavorites = user.favorites.findIndex(look => look.toString() === lookId)

                        user.favorites.splice(lookIndexInUserFavorites, 1)
                    }

                    return Promise.all([look.save(), user.save()])
                })
        })
        .then(() => { })

}

module.exports = toggleFavoriteLook;