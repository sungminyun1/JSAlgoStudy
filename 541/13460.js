const input = `7 7
#######
#...RB#
#.#####
#.....#
#####.#
#O....#
#######`.split('\n')

const [N,M] = input.shift().split(' ').map(Number);
const Board = input.map(val=>val.split(''))

let CR,CB;

for(let i =0; i<N; i++){
    for(let j =0; j<M; j++){
        if(Board[i][j]==='R'){
            CR = [i,j]
        }
        if(Board[i][j] === 'B'){
            CB = [i,j]
        }
    }
}

function move(dir){
    let avail_R = true;
    let avail_B = true;

    while(avail_R || avail_B){
        let tr = [CR[0]+dir[0],CR[1]+dir[1]];
        let tb = [CB[0]+dir[0],CB[1]+dir[1]];
        if(tr[0]>=0 && tr[0]<N && tr[1]>=0 && tr[1]<M){
            if(Board[tr[0]][tr[1]] === 'O'){
                return{
                    done: true
                }
            }else if(Board[tr[0]][tr[1]] === 'B'){
                if(Board[tr[0]+dir[0]][tr[1]+dir[1]] === '.'){
                    
                }
            }
        }
    }
}