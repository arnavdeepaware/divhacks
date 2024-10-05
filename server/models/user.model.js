const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    roadmaps: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Roadmap'
        }
    ],
    skillsets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skillset'
        }
    ],
    careerpath: {
        type: String,
        default: ""
    },
    recommendations: {
        type: [String],
        default: []
    }
}, { timestamps: true });

// Ensure roadmaps is an empty array by default
userSchema.path('roadmaps').default([]); 

const User = mongoose.model('User', userSchema);

module.exports = User;
