const mongoose = require('../mongoose');

var schema = new mongoose.Schema({
  ship: String,
  name: String,
  fit: Array,
  osid: Number,
  tags: Array
});

module.exports = mongoose.model('fit1', schema);