import { readFileSync, writeFileSync } from 'fs';

var list = readFileSync('input6').toString().trim();
list = list.split('');



// list = list.map((x, i, a) => new Set(a.slice(i, i+4)).size).indexOf(4)+4
list = list.map((x, i, a) => new Set(a.slice(i, i+14)).size).indexOf(14)+14



// list = list.map(x => x)

// list = list.map(x => {
//     return x;
// });

// list = list.filter(x => x)

// list = list.sort((a, b) => a-b);

// list = list.reduce((a, b) => a + b, 0);


console.log(list);