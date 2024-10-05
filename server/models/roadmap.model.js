const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoadmapSchema = new Schema({
    skill: {
        type: String,
        required: true
    },
    timeBy: {
        type: Date,
        required: true
    },
    frequency: {
        type: String, //Num of Weeks
        required: true,
    },
    instructions: [
        {
            step: {
                type: [String],
                required: true
            },
            todo: {
                type: [String],
                required: true
            },
            resources: [String]
        }
    ]
}, {
    timestamps: true
});

const Roadmap = mongoose.model('Roadmap', RoadmapSchema);

module.exports = Roadmap;