const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo DB database connection successfully established");
})

const usersRouter = require('./routes/users');
const roadmaps_sRouter = require('./routes/roadmaps-s');
const roadmap_sRouter = require('./routes/roadmap-s');
const skillsetsRouter = require('./routes/skillsets');

app.use('/users', usersRouter);
app.use('/roadmaps-s', roadmaps_sRouter);
app.use('/roadmap-s', roadmap_sRouter);
ap.use('/skillsets', skillsetsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});