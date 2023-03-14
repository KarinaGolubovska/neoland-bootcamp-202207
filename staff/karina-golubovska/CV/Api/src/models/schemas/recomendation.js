const { Schema } = require('mongoose')
const recomendation = new Schema({
    // user: {
    //     type: ObjectId,
    //     required: true,
    //     ref: 'User'
    // },

    

    imagen: {
        type: String,
        required: true
    },

    visibility: {
        type: String,
        enum: ['private', 'public'],
        default: 'public'
    },
})

module.exports = recomendation