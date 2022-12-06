import { readFileSync, writeFileSync } from 'fs';

// var list = readFileSync('input').toString();
var list = readFileSync('input5').toString();

var moves = list.split('\n\n')[1]
list = list.split('\n\n')[0];

list = list.split('\n').map(x => x.replaceAll('  ', ' ').replaceAll('  ', ' ').split(' ').map(x => x.length ? x[1] : null));
list.pop();

moves = moves.split('\n')
moves = moves.map(x => x.split(' ').filter((x, i) => i == 1 || i == 3 || i == 5))

var stacks = [];
console.log(list)
list.forEach((x) => {
    console.log(x)

    x.forEach((y,col) => {
        console.log(y)

        stacks[col] ? !!y && stacks[col].push(y) : stacks[col] = y ? [y] : [];
    });
});
stacks.map(x => x.reverse());
console.log(stacks);
// throw('')
console.log(moves);
moves.forEach(x => {
    var acc = [];
    for(var i = 0; i < x[0]; i++) {
        acc.push(stacks[x[1]-1].pop())
    }
    for(var c of acc.reverse()) {
        stacks[x[2]-1].push(c);
    }
});
console.log(stacks);
stacks = stacks.map(x => x[x.length-1])

console.log(stacks.join(''));

// console.log(moves);
// console.log(list);