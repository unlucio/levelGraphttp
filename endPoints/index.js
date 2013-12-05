var fs = require('fs');

var endPointsList = [];
var endPointsDir = './http/endPoints';
var endPointFiles = fs.readdirSync(endPointsDir)

for(var fileIndex in endPointFiles){
	var fileName = endPointFiles[fileIndex];
	if ( fileName !== 'index.js') {
		endPointsList.push(require('./'+fileName));
	}
}

module.exports = endPointsList;