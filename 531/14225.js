const input = `4
2 1 2 7`.split('\n').map(val=>val.split(' ').map(Number))

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(val=>val.split(' ').map(Number))

const [N] = input[0];

const Arr = input[1];
const res = [];
const visited = []

const find = (val) =>{
    res[val] = true;

    for(let i =0; i<Arr.length; i++){
        if(!visited[i]){
            visited[i] = true;
            find(val + Arr[i]);
            visited[i] = false;
        }
    }
}

find(0)

let idx = 1;
while(true){
    if(!res[idx]){
        console.log(idx);
        break;
    }
    idx++
}