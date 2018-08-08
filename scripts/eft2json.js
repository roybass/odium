const fs = require('fs');
const path = require('path');
const types = require('./types');

if (process.argv.length != 3) {
	console.log('Usage: Program <INPUT FILE or DIR>');
	return;
}

function processFile(inputFile) {
	const content = fs.readFileSync(inputFile, 'utf8');
	const lines = content.split('\n');

	if (!lines.length) {
		console.log('Input file is empty');
		return;
	}
	const eft = {};
	const header = lines[0].substr(1, lines[0].length - 2);
	const headerParts = header.split(',');
	eft.ship = headerParts[0].trim();
	eft.name = headerParts.slice(1).join(',').trim();

	eft.fit = lines.splice(1)
		.map((elm) => elm.trim())
		.filter((elm) => {
				const lc = elm.toLowerCase();
				return elm && (lc != '[empty high slot]' && lc != '[empty low slot]' && lc != '[empty med slot]' && lc != '[empty  subsystem slot]');
			}
		)
		.map((elm) => {
			const result = {name: elm};
			const typeAndCharge = elm.split(',');
			let type = types.nameToType[typeAndCharge[0]];

			if (typeAndCharge.length == 2) {
				result.name = typeAndCharge[0];
				result.charge = {
					id : types.nameToType[typeAndCharge[1].trim()].id,
					name : typeAndCharge[1].trim()
				}
			}

			if (!type) {
				const matches = typeAndCharge[0].match(/(.*)?\sx(\d+)$/); // Check for something like 'Hammerhead II x5'
				if (matches && matches.length == 3) {
					type = types.nameToType[matches[1]];
					result.name = matches[1];
					result.amount = matches[2];
				}
			}
			if (!type) {
				console.log(elm);
			}
			result.id = type.id;
			return result;
		});

	const baseName = path.basename(inputFile);
	const extName = path.extname(inputFile);
	const fileName = baseName.substr(0, baseName.length - extName.length);
	const filenameParts = fileName.split(',');

	eft.osid = filenameParts[0];
	eft.tags = filenameParts.splice(1)
		.map((elm) => elm.trim())
		.filter((elm) => elm);

	console.log(JSON.stringify(eft, null, 2));
};


// If input is a directory, process all of it.
function processInput(input) {
	if (fs.statSync(input).isDirectory()) {
		const files = fs.readdirSync(input);
		for (let file of files) {
			processInput(path.join(input, file));
		}
	} else {
		processFile(input);
	}	
}

const input = process.argv[2];
if (!fs.existsSync(input)) {
	console.log('File ' + input + ' does not exist');
	return;
}

processInput(input);

