const input = `0 3 5 4 6 9 2 7 8
7 8 2 1 0 5 6 0 9
0 6 0 2 7 8 1 3 5
3 2 1 0 4 6 8 9 7
8 0 4 9 1 3 5 0 6
5 9 6 8 2 0 4 1 3
9 1 7 6 5 2 0 8 0
6 0 3 7 0 1 9 5 2
2 5 8 3 9 4 7 6 0`.split('\n').map(val=>val.split(' ').map(Number));

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(val=>val.split(' ').map(Number))

const zero = [];
const pick = [];

for(let i =0; i<9; i++){
    for(let j =0; j<9;j++){
        if(input[i][j] === 0){
            zero.push([i,j])
        }
    }
}

let done =false;
function find(level){
    if(done) return;

    if(level >= zero.length){
        done = true;
        console.log(input.map(val=>val.join(' ')).join('\n'))
        return;
    } 
    let [row,col] = zero[level]

    for(let i =1; i<=9; i++){
        if(check(row,col,i)){
            input[row][col] = i;
            pick.push(i);
            find(level+1);
            input[row][col] = 0;
            pick.pop()
        }
    }
}

function check(row,col,val){
    for(let i=0; i<9; i++){
        if(input[row][i] === val || input[i][col] === val){
            return false;
        }
    }
    let cube_r = Math.floor(row/3)*3;
    let cube_c = Math.floor(col/3)*3;
    for(let l = cube_r; l<cube_r+3; l++){
        for(let m = cube_c; m<cube_c+3; m++){
            if(input[l][m] === val){
                return false;
            }
        }
    }

    return true;
}

find(0)

