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
    console.log(Board)
}