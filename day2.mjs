import { readFileSync, writeFileSync } from 'fs';

var list = readFileSync('input2').toString();
list = list.trim();
list = list.split('\n');


function calc(a, b) {
    var n = 0;
    if(b == 'X') n = 1;
    else if(b == 'Y') n = 2;
    else if(b == 'Z') n = 3;
    return n += calc2(a,b);
}

function calc2(a, b) {
    if(a =='A') { //rock
        if(b == 'X') return 3;
        else if(b == 'Y') return 6;
        else if(b == 'Z') return 0;

    } else if(a =='B') { //paper
        if(b == 'X') return 0;
        else if(b == 'Y') return 3;
        else if(b == 'Z') return 6;
    } else if(a =='C') { //scissors
        if(b == 'X') return 6;
        else if(b == 'Y') return 0;
        else if(b == 'Z') return 3;
    }
}


function trans(a, b) {
    if(a =='A') { //rock
        if(b == 'X') return 'Z';
        else if(b == 'Y') return 'X';
        else if(b == 'Z') return 'Y';

    } else if(a =='B') { //paper
        if(b == 'X') return 'X';
        else if(b == 'Y') return 'Y';
        else if(b == 'Z') return 'Z';
    } else if(a =='C') { //scissors
        if(b == 'X') return 'Y';
        else if(b == 'Y') return 'Z';
        else if(b == 'Z') return 'X';
    }
}

list = list.map(x => x.split(' ')).map(x => [x[0], trans(x[0], x[1])]).map(x => calc(x[0], x[1])).reduce((a, b) => a+b, 0);
console.log(JSON.stringify(list));



