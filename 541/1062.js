const input = `9 8
antabtica
antaxtica
antadtica
antaetica
antaftica
antagtica
antahtica
antajtica
antaktica`.split('\n');

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const [N,K] = input.shift().split(' ').map(Number);
const Arr = input.map(val=>val.split(''))

const alpha = {
    'a': 1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13,
    'n': 14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26
}

if(K<5){
    console.log(0)
    return;
}
if(K===26){
    console.log(N);
    return;
}
let max = 0;
const pick = [];
pick[1] = true;
pick[3] = true;
pick[9] = true;
pick[14] = true;
pick[20] = true

const find = (level,start) =>{
    if(level === K-5){
        let count = 0 ;
        for(let i=0; i<Arr.length; i++){
            let correct = true
            for(let j =0; j<Arr[i].length; j++){
                if(!pick[alpha[Arr[i][j]]]){
                    correct= false;
                    break;
                }
            }
            if(correct) count++
        }
        if(count>max) max = count;
        return;
    }
    for(let i =start; i<Object.keys(alpha).length; i++){
        let k = Object.keys(alpha)[i];
        if(!pick[alpha[k]]){
            pick[alpha[k]] = true;
            find(level+1,i+1);
            pick[alpha[k]] = false;
        }
    }
}

find(0,0)

console.log(max)