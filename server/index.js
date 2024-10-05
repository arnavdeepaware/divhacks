const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Skill Builder App Backend');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
