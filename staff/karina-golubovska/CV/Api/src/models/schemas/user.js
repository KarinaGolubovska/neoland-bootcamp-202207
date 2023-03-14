const { Schema } = require('mongoose')

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    photo: {
        type: String
    },

    // nickName: {
    //     type: String
    // }
})

module.exports = user