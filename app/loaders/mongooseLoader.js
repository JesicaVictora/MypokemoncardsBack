const mongoose = require('mongoose');
const config = require('../config');


const connection = async () => mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

module.exports = connection;
