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
  key.add(currentline[3]);
}
console.log(key);

for(state of key)
{
var Total_graduate_Male=0;
var Total_graduate_Female=0;
var Male="Male";
var Female="Female";
var State=null;
for(let i=1; i<lines.length; i++)
{
  let currentline = lines[i].split(',');
    if(currentline[5]=='All ages' && currentline[3]===state && currentline[4]=='Total')
    {
      Total_graduate_Male=Total_graduate_Male+Number(currentline[41]);
      Total_graduate_Female=Total_graduate_Female+Number(currentline[40]);
      State=currentline[3];

    }

}

outputarray.push({State:State,
Male:Total_graduate_Male,
Female:Total_graduate_Female});
}
fs.writeFileSync('../outputdata/State_Gender.json', JSON.stringify(outputarray));
console.log('done');
