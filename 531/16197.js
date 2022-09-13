const input = `5 3
###
.o.
#.#
.o.
###`.split('\n');

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const [N,M] = input.shift().split(' ').map(Number);
const Board = input.map(val=>val.split(''))
const spot = []
const dir = [[0,1],[1,0],[-1,0],[0,-1]]
for(let i =0; i<N; i++){
    for(let j =0; j<M; j++){
        if(Board[i][j] === 'o'){
            spot.push([i,j])
        }
    }
}

const needVisit = [[spot,0]];

const visited1 = [];
const visited2 = [];

for(let i =0; i<N; i++){
    visited1.push([]);
    visited2.push([])
}

while(needVisit.length){
    const [nowP,level] = needVisit.shift();
    const [r1,c1] = nowP[0];
    const [r2,c2] = nowP[1];

    if(level >= 10){
        console.log(-1)
        return;
    }

    visited1[r1][c1] = true;
    visited2[r2][c2] = true;

    for(let i =0; i<dir.length; i++){
        let [nr1,nc1] = [r1+dir[i][0],c1+dir[i][1]]
        let [nr2,nc2] = [r2+dir[i][0],c2+dir[i][1]]
        let move = 0;
        let out = 0;
        let visited = 0;

        if(nr1 >=0 && nr1<N && nc1>=0 && nc1<M){
            if(Board[nr1][nc1] === '.'){
                if(visited1[nr1][nc1]){
                    visited++
                }else{
                    move++;
                }
            }else{
                nr1 = r1;
                nc1 = c1;
            }
        }else{
            out++
        }

        if(nr2 >=0 && nr2<N && nc2>=0 && nc2<M){
            if(Board[nr2][nc2] === '.'){
                if(visited2[nr2][nc2]){
                    visited++
                }else{
                    move++;
                }
            }else{
                nr2 = r2;
                nc2 = c2;
            }
        }else{
            out++
        }

        if(out === 1){
            console.log(level+1);
            return;
        }

        if(out === 0 && move >0 && visited <2){
            needVisit.push([[[nr1,nc1],[nr2,nc2]],level+1])
        }
    }
}

console.log(-1)