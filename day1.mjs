import { readFileSync, writeFileSync } from 'fs';

var list = readFileSync('input1').toString();
list = list.split('\n\n').map(x => x.split('\n').map(x => Number(x))).map(x => x.reduce((a, b) => a+b, 0));
list = list.sort((a,b) => a-b).reverse().slice(0, 3);
list = list.reduce((a, b) => a+b, 0 );
console.log(list);



