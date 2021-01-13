const mongoose = require('mongoose');

const SpartanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    service_number : {
        type: String,
        required: true
    },
    home_world: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        required: true
    },
    species: {
        type: String,
        default: "Human"
    },
    status: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Spartan', SpartanSchema);