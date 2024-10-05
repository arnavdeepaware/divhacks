const router = require('express').Router();

let Roadmap = require('../models/roadmap.model');
let User = require('../models/user.model');

// Create a new roadmap and associate it with a user
router.route('/add/:userId').post((req, res) => {
    const { skill, timeBy, frequency, instructions } = req.body;
    const userId = req.params.userId;

    // Create a new roadmap
    const newRoadmap = new Roadmap({
        skill,
        timeBy,
        frequency,
        instructions
    });

    // Save the roadmap to the database
    newRoadmap.save()
        .then((savedRoadmap) => {
            // After saving the roadmap, find the user and update their roadmaps array
            User.findById(userId)
                .then(user => {
                    if (!user) {
                        return res.status(404).json('User not found');
                    }

                    // Add the newly created roadmap's ID to the user's roadmaps array
                    user.roadmaps.push(savedRoadmap._id);

                    // Save the updated user
                    user.save()
                        .then(() => res.json('Roadmap added and associated with user!'))
                        .catch(err => res.status(400).json('Error updating user: ' + err));
                })
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error creating roadmap: ' + err));
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