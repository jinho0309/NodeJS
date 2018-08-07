const fs = require ('fs');
console.log('1');

//Sync
const data= fs.readFileSync('data.txt',{encoding : 'utf8'});

console.log(data);

// Async
console.log(2);
fs.readFile('data.txt',{encoding : 'utf8'},function(err,data){
    console.log(3);
    console.log(data);
});

console.log(4);
//output : 2 3 4 data
