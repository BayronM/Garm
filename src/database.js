const mongoose = require('mongoose');

const URI = 'mongodb://localhost/garm-db';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true })
    .then(db => console.log('MongoDB database connection established successfully'))
    .catch(err => console.error(err));

module.exports = mongoose;