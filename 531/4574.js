const input = `10
6 B2 1 B3
2 C4 9 C3
6 D3 8 E3
7 E1 4 F1
8 B7 4 B8
3 F5 2 F6
7 F7 6 F8
5 G4 9 G5
7 I8 8 I9
7 C9 2 B9
C5 A3 D9 I4 A9 E5 A2 C6 I1
11
5 I9 2 H9
6 A5 7 A6
4 B8 6 C8
3 B5 8 B4
3 C3 2 D3
9 D2 8 E2
3 G2 5 H2
1 A2 8 A1
1 H8 3 I8
8 I3 7 I4
4 I6 9 I7
I5 E6 D1 F2 B3 G9 H7 C9 E5
0`.split('\n')

const alpha = {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8}
while(true){
    const N = +input.shift()
    if(N === 0) break;

    const Board = [];
    for(let i =0; i<9; i++){
        Board.push(new Array(9).fill(0))
    }
    for(let i =0; i<N; i++){
        const [val1,p1,val2,p2] = input.shift().split(' ');
        const [p1r,p1c] = p1.split('');
        const [p2r,p2c] = p2.split('');
        Board[alpha[p1r]][Number(p1c)-1] = Number(val1);
        Board[alpha[p2r]][Number(p2c)-1] = Number(val2)
    }
    const Nums = input.shift().split(' ');
    for(let i=0; i<Nums.length; i++){
        const [r,c] = Nums[i].split('');
        Board[alpha[r]][Number(c)-1] = i+1
    }

    solve(Board);
}

function solve(Board){
    const domino = []
    const visit = []
    const zero = [];
    for(let i =1; i<10; i++){
        for(let j = 1; j<10; j++){
            if(i !== j){
                domino.push([i,j])
            }
        }
    }

    for(let i =0; i<9; i++){
        for(let j =0; j<9; j++){
            if(Board[i][j] === 0){
                zero.push([i,j])
            }
        }
    }

    let done = false;
    const find = (now) =>{
        if(done) return;

        // if(now === 10) console.log(10)
        // if(now === 20) console.log(20)
        // if(now === 30) console.log(30)
        // if(now === 40) console.log(40)
        if(now === 5){
            console.log('hi')
        } 
        // console.log(now)

        if(now >= zero.length){
            done = true;
            console.log(Board.map(val=>val.join('')).join('\n'))
            return
        }
        const [row,col] = zero[now];
        if(Board[row][col] !== 0){
            return;
        }

        for(let i =0; i<domino.length; i++){
            if(visit[i]) continue;
            if(check(row,col,domino[i][0],Board)){
                if(Board[row][col+1] === 0 && check(row,col+1,domino[i][1],Board)){
                    Board[row][col] = domino[i][0];
                    Board[row][col+1] = domino[i][1];
                    visit[i] = true
                    find(now+1);
                    Board[row][col] = 0;
                    Board[row][col+1] = 0;
                    visit[i] = false
                }

                if(Board[row+1] && Board[row+1][col] === 0 && check(row+1,col,domino[i][1],Board)){
                    Board[row][col] = domino[i][0];
                    Board[row+1][col] = domino[i][1];
                    visit[i] = true;
                    find(now+1)
                    Board[row][col] = 0;
                    Board[row+1][col] = 0;
                    visit[i] = false
                }
            }
        }
        console.log('end?')
    }

    find(0)
}

function check(row,col,val,Board){
    for(let i=0; i<9; i++){
        if(Board[row][i] === val || Board[i][col] === val){
            return false;
        }
    }
    let cube_r = Math.floor(row/3)*3;
    let cube_c = Math.floor(col/3)*3;
    for(let l = cube_r; l<cube_r+3; l++){
        for(let m = cube_c; m<cube_c+3; m++){
            if(Board[l][m] === val){
                return false;
            }
        }
    }

    return true;
}