const fs = require('fs');

var file = fs.readFileSync('../inputdata/IndiaSC2011 (5).csv');

fs.writeFileSync('../outputdata/indiasc2011.json', JSON.stringify(jsonArray));
