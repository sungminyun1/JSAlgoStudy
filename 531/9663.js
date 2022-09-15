const input = `8`

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim()

const N = +input;

const Board = [];
let res = 0;

for(let i =0; i<N; i++){
    Board.push([])
}

const check = (row,col) =>{
    for(let i = 0; i<N; i++){
        if(Board[row][i] || Board[i][col]){
            return false
        }
    }

    const dir = [[-1,-1],[-1,1],[1,-1],[1,1]]
    for(let i =0; i<dir.length; i++){
        let idx = 1;
        while(true){
            let nrow = row + dir[i][0] * idx;
            let ncol = col + dir[i][1] * idx;
            if(nrow>=0 && nrow<N && ncol>=0 && ncol<N){
                if(Board[nrow][ncol]){
                    return false;
                }
                idx++
            }else{
                break;
            }
        }
    }

    return true;
}

const find = (row,col,count) =>{
    if(count === N){
        res++;
        return;
    }

    for(let i =row+1; i<N; i++){
        for(let j = 0; j<N; j++){
            if(check(i,j)){
                Board[i][j] = true;
                find(i,j,count+1);
                Board[i][j] = false;
            }
        }
    }
}
for(let i =0; i<N; i++){
    for(let j =0; j<N; j++){
        Board[i][j] = true;
        find(i,j,1)
        Board[i][j] = false;
    }
}

console.log(res)