const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://snake:vpCQ4jhIMSQyvr2B@evedb-jo2zm.mongodb.net/evedb');

// TODO: check connection
module.exports = mongoose;