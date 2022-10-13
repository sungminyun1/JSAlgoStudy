const input = `5 5
IEFCJ
FHFKC
FFALF
HFGCF
HMCHH`.split('\n');

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const [R,C] = input.shift().split(' ').map(Number)
const Board = input.map(val=>val.split(''))

let max = 0;
const his = {}
his[Board[0][0]] = true;
const dir = [[0,1],[1,0],[-1,0],[0,-1]];

const find = (row,col,len) =>{
    if(len > max) max = len;

    for(let i =0; i<dir.length; i++){
        const nr = row + dir[i][0]
        const nc = col + dir[i][1];

        if(nr>=0 && nr<R && nc>=0 && nc<C && !his[Board[nr][nc]]){
            his[Board[nr][nc]] = true;
            find(nr,nc,len+1);
            his[Board[nr][nc]] = false;
        }
    }    
}

find(0,0,1);

console.log(max)