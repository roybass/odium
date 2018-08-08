const yaml = require('js-yaml');
const fs = require('fs');
 
// Get document, or throw exception on error
try {
  const doc = yaml.safeLoad(fs.readFileSync('typeIDs.yaml', 'utf8'));
  const json = {};
  Object.keys(doc).forEach((idStr) => {
  	const id = parseInt(idStr)
  	const item = doc[id];
  	json[item.name.en] = {
  		id,
  		groupId: item.groupID,
  		iconId: item.iconID,
  		name: item.name.en,
  		volume: item.volume
  	}
  });
  console.log(JSON.stringify(json, null, 1));
} catch (e) {
  console.log(e);
}