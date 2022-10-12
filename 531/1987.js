const input = `3 6
HFDFFB
AJHGDH
DGAGEH`.split('\n');

const [R,C] = input.shift().split(' ').map(Number)
const Board = input.map(val=>val.split(''))

const alpha = {
    'A': 1, 'B':2, 'C':3, 'D':4, 'E':5, 'F':6, 'G':7, 'H':8, 'I':9, 'J':10, 'K':11, 'L':12, 'M':13,
    'N': 14, 'O':15, 'P':16, 'Q':17, 'R':18, 'S':19, 'T':20, 'U':21, 'V':22, 'W':23, 'X':24, 'Y':25, 'Z':26
}

const visit = [];
const needVisit = [[0,0,1]]

let max = 0;

const dir = [[0,1],[1,0],[-1,0],[0,-1]]
while(needVisit.length){
    const [row,col,len] = needVisit.shift();

    if(len > max) max = len;
    visit[alpha[Board[row][col]]] = true;

    for(let i =0; i<dir.length; i++){
        const nr = row + dir[i][0];
        const nc = col + dir[i][1];
        if(nr>=0 && nr<R && nc>=0 && nc<C && !visit[alpha[Board[nr][nc]]]){
            needVisit.push([nr,nc,len+1])
        }
    }
}

console.log(max)