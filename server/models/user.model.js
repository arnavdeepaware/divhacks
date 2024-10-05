const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    roadmaps: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Roadmap' // References the Roadmap model
        }
    ],
    skillsets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skillset' // References the Skillset model
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
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    //     trim:true,
    // }
}, {
    timestamps: true,
});

// Ensure the roadmaps array only contains unique ObjectId references
userSchema.index({ roadmaps: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

module.exports = User;