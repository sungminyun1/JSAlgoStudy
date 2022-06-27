const input = `4
1 2 3 4`.split('\n').map(val => val.split(' ').map(Number));

// const fs = require('fs');
// const input= fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val => val.split(' ').map(Number));

main(input[0][0],input[1])
function main(N,Arr){

    if(N === 1){
        console.log(-1)
        return;
    }

    let token = 0;
    for(let i = Arr.length-1; i>=1; i--){
        if(Arr[i]>Arr[i-1]){
            token = i;
            break;
        }
    }

    if(token === 0){
        console.log(-1);
        return;
    }

    let back = Arr.splice(token);
    let next = Math.max(...Arr)+1;
    let nextIdx = back.indexOf(next);

    let tmp = Arr.pop();
    Arr.push(back[nextIdx]);
    back[nextIdx] = tmp;

    Arr.push(...back.sort((a,b)=>a-b))

    console.log(Arr.join(' '))
}