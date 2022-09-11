const input = `4
2 1 2 7`.split('\n').map(val=>val.split(' ').map(Number))

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(val=>val.split(' ').map(Number))

const [N] = input[0];
const Arr = input[1]
const res = [];
const his = []
const find = (idx) =>{
    if(idx === N){
        const sum = his.reduce((sum, val) => sum + val, 0);
        res[sum] = true;
        return
    }
    his.push(Arr[idx]);
    find(idx+1);
    his.pop();
    find(idx+1)
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