var fs = require('fs');

function ReadAppend(file, appendFile) {
    fs.readFile(appendFile, function(err, data) {
        if (err) {
            console.log('File was not Read');
            throw err;
        }
        console.log('File was Read');

        fs.appendFile(file, data, function(err) {
            console.log('File')
            if (err) {
                console.log('File was not append');
                throw err;
            }
            console.log('The "data to append" was appended to a file');
        });
    });
}

// file='./outputdata/India2011Merge.csv';
// //appendFile='./inputdata/India2011.csv';
//
//   //appendFile='./inputdata/IndiaSC2011.csv';
//
// appendFile='./inputdata/India2011.csv';
// ReadAppend(file,appendFile);
