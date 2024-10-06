const router = require('express').Router(); // use lowercase 'router'

let User = require('../models/user.model');

// GET request to retrieve all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST request to add a new user
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json(`${username} added!`))
        .catch(err => res.status(400).json('Error: ' + err));
});

//GET request to retrieve a user by ID
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if(!user){
                return res.status(404).json('User Not Found');
            }
            res.json(user);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//PUT Request to update a user by ID
router.route('/update/:id').patch((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if(!user){
                return res.status(404).json('User Not Found');
            }
            
            //Update the user attributes
            user.username = req.body.username || user.username;
            user.roadmaps = req.body.roadmaps || user.roadmaps;
            user.skillsets = req.body.skillsets || user.skillsets;
            user.careerpath = req.body.careerpath || user.careerpath;
            user.recommendations = req.body.recommendations || user.recommendations;

            user.save()
                .then(() => res.json(`${user.username} updated!`))
                .catch(err => res.status(400).json('Error: ' + err));
        })
})

// GET request to fetch all roadmaps associated with the user
router.route('/:userId/roadmaps').get((req, res) => {
    const userId = req.params.userId;

    User.findById(userId)
        .populate('roadmaps')  // Populate roadmaps with full roadmap data
        .then(user => {
            if (!user) {
                return res.status(404).json('User not found');
            }
            res.json(user.roadmaps);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//DELETE request to remove an associated roadmap
router.route('/:userId/roadmaps/:roadmapId').delete((req, res) => {
    const userId = req.params.userId;
    const roadmapId = req.params.roadmapId;

    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json('User not found');
            }

            // Remove the roadmap from user's roadmaps array
            user.roadmaps.pull(roadmapId);

            // Save the updated user
            user.save()
                .then(() => {
                    // Optionally, you can also delete the roadmap from the Roadmap collection
                    Roadmap.findByIdAndDelete(roadmapId)
                        .then(() => res.json('Roadmap removed and deleted!'))
                        .catch(err => res.status(400).json('Error deleting roadmap: ' + err));
                })
                .catch(err => res.status(400).json('Error updating user: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//GET request to retireve all skillsets of a user
router.route('/skillset/:userId').get((req, res) => {
    const userId = req.params.userId;

    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json('User not found');
            }
            res.json(user.skillsets);
        })
        .catch(err => res.status(400).json('Error: ' + err));
    })


module.exports = router;
