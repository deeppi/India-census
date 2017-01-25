const fs = require('fs');
var file = fs.readFileSync('../outputdata/India2011Merge.csv');
var fileString = file.toString();
var lines = fileString.split('\n');
var key = new Set();
var outputarray = [];
var obj = {};

var lineofline = lines[0].split(',');
var e = [];
var d = 0;
for (var k = 15; k < lineofline.length; k = k + 3) {
    e[d] = lineofline[k];
    d = d + 1;
}
console.log(e);

var inc = 0;

for (var l = 0; l < e.length; l++) {
    var Title;
    var Total = 0;
    for (let i = 1; i < lines.length; i++) {
        let currentline = lines[i].split(',');
        if (currentline[5] == 'All ages' && currentline[4] == 'Total' && currentline[15 + inc] != null) {
            Title = e[l];
            Total = Total + Number(currentline[15 + inc]);
        }

    }
    inc = inc + 3;
    outputarray.push({
        Title: Title,
        Total: Total
    });
}
fs.writeFileSync('../outputdata/EducationCategory.json', JSON.stringify(outputarray));
console.log('done');
