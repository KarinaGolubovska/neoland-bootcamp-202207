const { Schema, Types: { ObjectId } } = require('mongoose')
const item = require('./item')

const look = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    photo: {
        type: String,
        required: true
    },

    visibility: {
        type: String,
        enum: ['private', 'public'],
        default: 'public'
    },

    items: [item],

    // SubmitEvent: {
    // type: String,
    // },

    createAt: {
        type: Date,
        default: Date.now
    },

    modifiedAt: {
        type: Date
    },
    favorites:{
        type:[ObjectId],
        ref: 'User'
    },
})

module.exports = look