const input = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`.split('\n')

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const N = +input.shift();

main(N,input.map(val=>val.split(' ')))
function main(N,Arr){
    const graph = {}

    for(let i =0; i<Arr.length; i++){
        graph[Arr[i][0]] = [Arr[i][1],Arr[i][2]]
    }

    const pres = [];
    const mres = [];
    const lres = [];

    const find = (now) =>{
        pres.push(now)
        let [left,right] = graph[now];
        if(left !== '.'){
            find(left)
        }
        mres.push(now);
        if(right !== '.'){
            find(right)
        }
        lres.push(now)
    }
    find('A')

    console.log(pres.join(''));
    console.log(mres.join(''));
    console.log(lres.join(''));
}