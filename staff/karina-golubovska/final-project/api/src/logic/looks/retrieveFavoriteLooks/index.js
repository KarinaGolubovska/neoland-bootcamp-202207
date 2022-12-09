
const { User, Look } = require("../../../models");
const { NotFoundError, SystemError } = require("errors");
const { verifyObjectIdString } = require("../../../utils");
const { mongoose } = require("mongoose")

function retrieveFavoriteLooks(userId) {
  verifyObjectIdString(userId, "user id");

  return User.findById(userId).populate('favorites')
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      const { favorites } = user

      favorites.forEach(favorite => {
        favorite.id = favorite._id.toString()
        delete favorite._id
        delete favorite.__v
      })

      return favorites
    });
}

module.exports = retrieveFavoriteLooks;
