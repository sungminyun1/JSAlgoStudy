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
        let pow = Arr[i].length - j -1
        if(!alpha[Arr[i][j]]){
            alpha[Arr[i][j]] = pow;
        }else if(alpha[Arr[i][j]]<pow){
            alpha[Arr[i][j]] = pow;
        }
    }
}

const sorted = Object.keys(alpha).sort((a,b)=>alpha[b]-alpha[a])

for(let i =0; i<sorted.length; i++){
    alpha[sorted[i]] = 9-i;
}

let res = 0;
for(let i =0; i<Arr.length; i++){
    let s_res = '';
    for(let j =0; j<Arr[i].length; j++){
        s_res += alpha[Arr[i][j]]
    }
    res += Number(s_res)
}

console.log(res)