const fs = require('fs');
const idToType = JSON.parse(fs.readFileSync('scripts/items.json', 'utf8'));
const nameToType = JSON.parse(fs.readFileSync('scripts/nameToItem.json', 'utf8'));

module.exports = {
  idToType,
  nameToType
};
