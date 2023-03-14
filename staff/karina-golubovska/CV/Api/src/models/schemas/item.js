const { Schema } = require('mongoose')

const item = new Schema({
    url: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ['pantalones', 'camiseta', 'chaqueta', 'zapatos']
    },

    brand: {
        type: String,
        enum: ['mango', 'zara', 'bershka', 'nike']
    },
    coords: [Number], // ex: [100, 200]
})

module.exports = item