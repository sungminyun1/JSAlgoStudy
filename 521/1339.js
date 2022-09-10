const input = `10
ABB
BB
BB
BB
BB
BB
BB
BB
BB
BB`.split('\n');

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const N = +input.shift()

const Arr = input.map(val=>val.split(''))

const alpha = {};

for(let i =0; i<Arr.length; i++){
    for(let j =0; j<Arr[i].length; j++){
        if(!alpha[Arr[i][j]]) alpha[Arr[i][j]] = 0;
        alpha[Arr[i][j]] += 10 ** (Arr[i].length -j -1)
    }
}
console.log(Object.values(alpha).sort((a,b)=>b-a).reduce((acc,v,i) =>acc+v*(9-i),0))