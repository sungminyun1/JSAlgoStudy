const input = `5 0
-7 -3 -2 5 8`.split('\n').map(val=>val.split(' ').map(Number));

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val=>val.split(' ').map(Number));

const [N,S] = input[0]
main(N,S,input[1])

function main(N,S,Arr){
    let count = 0;

    const find = (depth,start,val) =>{
        if(depth === N+1){
            return;
        }
        if(val === S){
            count++
        }

        find(now+1,val + Arr[now+1])
    }

    for(let i =0; i<Arr.length; i++){
        find(0,i,Arr[i])
    }

    console.log(count)
}