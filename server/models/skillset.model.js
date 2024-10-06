const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillsetSchema = new Schema({
    skills: [
        {
            type: String,
            required: true
        }
    ]
}, {
    timestamps: true
});

const Skillset = mongoose.model('Skillset', skillsetSchema);

module.exports = Skillset;