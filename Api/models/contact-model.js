const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        
    },
});

const contact_model = mongoose.model("Contact", ContactSchema);
module.exports = contact_model;