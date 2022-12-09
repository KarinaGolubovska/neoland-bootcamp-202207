const { user, look, item } = require('./schemas')
const { model } = require('mongoose')

module.exports = {
    User: model('User', user),
    Look: model('Look', look),
    Item: model('Item', item)
}