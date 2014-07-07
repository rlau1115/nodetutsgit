//learnyounode fs-module

var fs = require('fs');
var path = require('path');//

module.exports = function(directoryNameString, fileExtensionString, callback) {
	fs.readdir(directoryNameString, function(err, directoryListArray) {
		if (err) {
			return callback(err);
		} else {
			// console.log(fileExtensionString);
			// console.log("DIRECTORY LIST: \n", directoryListArray);
			fileExtensionString = '.' + fileExtensionString;

			var resultArray = new Array();
			for (var i = 0; i < directoryListArray.length; i++) {
				if (path.extname(directoryListArray[i]) == fileExtensionString) {
					resultArray.push(directoryListArray[i]);
				}
			}
			callback(err, resultArray);
		}
	});
};