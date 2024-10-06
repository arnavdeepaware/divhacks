const router = require('express').Router();

let Roadmap = require('../models/roadmap.model');
let User = require('../models/user.model');

// Add roadmap and associate it with a user
router.post('/add/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { skill, timeBy, frequency, instructions } = req.body;

        // Create a new roadmap
        const newRoadmap = new Roadmap({
            skill,
            timeBy,
            frequency,
            instructions
        });

        // Save the new roadmap
        const savedRoadmap = await newRoadmap.save();

        // Find the user and associate the new roadmap with the user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json('User not found');
        }

        user.roadmaps.push(savedRoadmap._id);

        // Add skill to user's skillsets if not already present
        if (!user.skillsets.includes(skill)) {
            user.skillsets.push(skill);
        }
        
        await user.save();

        res.status(200).json('Roadmap added and associated with user successfully!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Get all roadmaps
router.route('/').get((req, res) => {
    Roadmap.find()
        .then(roadmaps => res.json(roadmaps))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get a roadmap by ID
router.route('/:id').get((req, res) => {
    Roadmap.findById(req.params.id)
        .then(roadmap => res.json(roadmap))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a roadmap by ID
router.route('/delete/:id').delete((req, res) => {
    Roadmap.findByIdAndDelete(req.params.id)
        .then(() => res.json('Roadmap deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;