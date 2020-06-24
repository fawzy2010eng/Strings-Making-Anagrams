'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.

function makeAnagram(a, b) {
    var elementary = a.length + b.length;
    var aset = new Set();
    var amap = new Map();
    var bset = new Set();
    var bmap = new Map();
for(var i = 0; i < a.length; i++){
    aset.add(a[i])
}
for (var it = aset.values(), val= null; val=it.next().value; ) {
    amap.set(val,getfreq(a,val))
}
for(var i = 0; i < b.length; i++){
    bset.add(b[i])
}
for (var it = bset.values(), val= null; val=it.next().value; ) {
    bmap.set(val,getfreq(b,val))
}
amap.forEach((value,key,amap)=>
{
    if(bmap.has(key)){}else{  
  
      amap.delete(key);
      
    }
});

bmap.forEach((value,key,bmap)=>
{
    if(amap.has(key)){}else{  
  
      bmap.delete(key);
      
    }
});
var final = 0;
amap.forEach((value,key,amap)=>
{
    final += 2*(Math.min(value,bmap.get(key)))
});
return elementary-final



};
function getfreq(str,c){
    var freq = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == c){
            freq++
        }
    }
    return freq
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
