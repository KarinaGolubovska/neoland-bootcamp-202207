const { Schema } = require('mongoose')
const recomendation = new Schema({
    
    imagen: {
        type: String,
        required: true
    },

    visibility: {
        type: String,
        enum: ['private', 'public'],
        default: 'public'
    },
    favorites:{
        type:[ObjectId],
        ref: 'User'
    },
    items: [item],

})

module.exports = recomendation