const input = `5
5 4 3 2 1`.split('\n').map(val => val.split(' ').map(Number));

// const fs = require('fs');
// const input= fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val => val.split(' ').map(Number));

main(input[0][0],input[1])
function main(N,Arr) {
    let idx = N-1;
    while(idx>0){
        if(Arr[idx-1]<Arr[idx]){
            idx--
        }else{
            break;
        }
    }
    if(idx === 0){
        console.log(-1);
        return;
    }
    let j = N-1;
    while(Arr[j] >= Arr[idx-1]){
        j--;
    }
    [Arr[idx-1],Arr[j]] = [Arr[j],Arr[idx-1]]
    console.log([
        ...Arr.slice(0,idx),
        ...Arr.slice(idx).sort((a,b)=>b-a)
    ].join(' '))
}