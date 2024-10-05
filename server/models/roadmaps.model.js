const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoadmapsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    roadmap: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Roadmap'
        }
    ]
}, {
    timestamps: true
});

const Roadmaps = mongoose.model('Roadmaps', RoadmapsSchema);

module.exports = Roadmaps;