const input = `10
1 1 1 0 0 0 0 1 1 1
1 1 1 1 0 0 0 0 1 1
1 0 1 1 0 0 0 0 1 1
0 0 1 1 1 0 0 0 0 1
0 0 0 1 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 1 0 0 0 0
0 0 0 0 1 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0`.split('\n');

main(+input.shift(),input.map(val=>val.split(' ').map(Number)))

function main(N,Board){
    let token = 0;

    const bfs = (row,col) =>{
        const needVisit = [[row,col]]
        const dir = [[0,1],[1,0],[-1,0],[0,-1]]
        while(needVisit.length){
            const [nowr,nowc] = needVisit.shift();
            if(Board[nowr][nowc] === token) continue;
            Board[nowr][nowc] = token;
            for(let i =0; i<dir.length; i++){
                const nexr = nowr + dir[i][0];
                const nexc = nowc + dir[i][1];
                if(nexr >=0 && nexr < N && nexc >=0 && nexc <N && Board[nexr][nexc] === 1){
                    needVisit.push([nexr,nexc])
                }
            }
        }
    }

    for(let i =0; i<N; i++){
        for(let j =0; j<N; j++){
            if(Board[i][j] === 1){
                token--;
                bfs(i,j)
            }
        }
    }

    for(let i = -1; i>=token; i--){
        let v =[];
        for(let j =0; j<N; j++){
            v.push([]);
        }
        let nv = [];
        for(let j=0; j<N; j++){
            for(let k=0; k<N; k++){
                if(Board[j][k] === i) nv.push([j,k])
            }
        }
    }
}