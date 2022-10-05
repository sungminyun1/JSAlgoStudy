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

const avail = {};

for(let i =0; i<9; i++){
    for(let j =0; j<9; j++){
        if(input[i][j] === 0){
            let key = `${i}_${j}`
            avail[key] = new Array(10).fill(true);
            for(let k = 0; k<9; k++){
                avail[key][input[i][k]] = false;
                avail[key][input[k][j]] = false;
            }

            let cube_r = Math.floor(i/3)*3;
            let cube_c = Math.floor(j/3)*3;
            for(let l = cube_r; l<cube_r+3; l++){
                for(let m = cube_c; m<cube_c+3; m++){
                    avail[key][input[cube_r][cube_c]] = false;
                }
            }
        }
    }
}

const keyMap = Object.keys(avail);

const pick = [];
let done = false
function find(now){
    if(done) return;

    if(now >= keyMap.length) {
        if(check()){
            let res = ``
            for(let i=0; i<9; i++){
                let tmp = [];
                for(let j =0; j<9; j++){
                    if(input[i][j] === 0){
                        tmp.push(pick.shift());
                    }else{
                        tmp.push(input[i][j])
                    }
                }
                res += `${tmp.join(' ')}\n`
            }
            console.log(res)
            done = true
        }
        return;
    }

    for(let i =1; i<10; i++){
        let val = avail[keyMap[now]][i];
        if(val){
            pick.push(i);
            find(now+1);
            pick.pop();
        }
    }
}

find(0)


function check(){
    let idx = 0;
    const candi = {};
    for(let i =0; i<9; i++){
        for(let j =0; j<9; j++){
            if(input[i][j] === 0){
                let key = `${i}_${j}`
                let val = pick[idx++];
                for(let k =0; k<9; k++){
                    if(input[i][k] === val || input[k][j] === val){
                        return false;
                    }else if(input[i][k] === 0 && candi[`${i}_${k}`] === val){
                        return false
                    }else if(input[k][j] === 0 && candi[`${k}_${j}`] === val){
                        return false
                    }
                }
                let cube_r = Math.floor(i/3)*3;
                let cube_c = Math.floor(j/3)*3;
                for(let l = cube_r; l<cube_r+3; l++){
                    for(let m = cube_c; m<cube_c+3; m++){
                        if(input[cube_r][cube_c] === val){
                            return false;
                        }else if(input[cube_r][cube_c] === 0 && candi[`${cube_r}_${cube_c}`] === val){
                            return false;
                        }
                    }
                }
                candi[key] = val;
            }
        }
    }

    return true;
}