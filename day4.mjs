import { readFileSync, writeFileSync } from 'fs';

var list = readFileSync('input4').toString().trim();
function contains(a,b,c,d) {
    console.log(a,b,c,d);
    if(a <= c && d <= b) return true;
    if(c <= a && b <= d) return true;
    return false;
}

function overlap(a,b,c,d) {
    if(c >=a && c <=b) return true;
    if(d >=a && d <=b) return true;
    if(a >= c && a <= d) return true;
    if(b >= c && b <= d) return true;
    return false;
}

list = list.split('\n').map(x => x.split(',').map(x => x.split('-')));

// list = list.map(x => contains(Number(x[0][0]), Number(x[0][1]), Number(x[1][0]), Number(x[1][1])));
list = list.map(x => overlap(Number(x[0][0]), Number(x[0][1]), Number(x[1][0]), Number(x[1][1])));
list = list.filter(x => x)




// list = list.map(x => x)

// list = list.map(x => {
//     return x;
// });

// list = list.filter(x => x)

// list = list.sort((a, b) => a-b);

// list = list.reduce((a, b) => a + b, 0);


console.log(list.length);