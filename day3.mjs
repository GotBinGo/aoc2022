import { readFileSync, writeFileSync } from 'fs';

var list = readFileSync('input3').toString().trim();
list = list.split('\n');


function half(x) {
    var len = x.length
    return [x.slice(0, len/2), x.slice(x.length/2, x.length)]
}

function find(arr) {
    var a = arr[0].split('');
    var b = arr[1].split('');
    var c = arr[2].split('');
    var d =  a.filter(x => b.indexOf(x) >= 0);
    return c.filter(x => d.indexOf(x) >= 0)[0];
    // return a.filter(x => b.indexOf(x) >= 0)[0];
}

function prio(x) {
    if(x.toLowerCase() == x) {
        return x.charCodeAt(0)-'a'.charCodeAt(0)+1;
    } else {
        return x.charCodeAt(0)-'A'.charCodeAt(0)+27;
    }
}
console.log(list)
// list = list.map(x => find(half(x))).map(x => prio(x));

var size = 3; var arrayOfArrays = [];
for (var i=0; i<list.length; i+=size) {
     arrayOfArrays.push(list.slice(i,i+size));
}
// console.log(arrayOfArrays)
list = arrayOfArrays.map(x => prio(find(x)));



// list = list.map(x => {
//     return x;
// });

// list = list.filter(x => x)

// list = list.sort((a, b) => a-b);

list = list.reduce((a, b) => a + b, 0);


console.log(list);
