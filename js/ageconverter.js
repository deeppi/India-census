const fs = require('fs');
var file = fs.readFileSync('../outputdata/India2011Merge.csv');
var fileString = file.toString();
var lines = fileString.split('\n');
var key=new Set();
var outputarray=[];
var obj={};
for(var i=1; i<lines.length-2; i++)
{
  let currentline = lines[i].split(',');
  key.add(currentline[5]);
}
console.log(key);

for(age of key)
{
var Total_graduate=0;
var Age=0;
for(let i=1; i<lines.length; i++)
{
  let currentline = lines[i].split(',');
    if(currentline[4]=='Total' && currentline[5]==age && currentline[5]!='Age not stated' && currentline[5]!='All ages')
    {
      Total_graduate=Total_graduate+Number(currentline[12]);
      Age=currentline[5];
    }

}

outputarray.push({Age:Age,
Total_graduate:Total_graduate});
}
fs.writeFileSync('../outputdata/Ageconverstion.json', JSON.stringify(outputarray));
console.log('done');
