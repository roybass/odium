const mongoose = require('../mongoose');

var schema = new mongoose.Schema({
  ship: String,
  name: String,
  fit: Array,
  osid: String,
  tags: Array
});

module.exports = mongoose.model('fit1', schema);
