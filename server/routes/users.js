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

module.exports = router;
