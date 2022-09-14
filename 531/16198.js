const input = `10
1 1 1 1 1 1 1 1 1 1`.split('\n').map(val=>val.split(' ').map(Number))

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(val=>val.split(' ').map(Number))

input.shift();

const [Arr] = input

const maxCount = Arr.length-2;

let max = -Infinity;
const his = [];
const visited = [];

const calc = () =>{
    const del = [];
    let tmp = 0;
    for(let i =0; i<his.length; i++){
        let left = his[i] -1;
        while(del[left]){
            left--
        }
        let right = his[i] +1;
        while(del[right]){
            right++
        }
        del[his[i]] = true;
        tmp += Arr[left]*Arr[right]
    }

    if(tmp > max) max = tmp
}

const find = (dep) =>{
    if(dep === maxCount){
        calc()
    }
    for(let i =1; i<Arr.length-1; i++){
        if(!visited[i]){
            his.push(i);
            visited[i] = true;
            find(dep+1);
            visited[i] = false;
            his.pop();
        }
    }
}
find(0)

console.log(max)