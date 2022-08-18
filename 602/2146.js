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
    const dir = [[0,1],[1,0],[-1,0],[0,-1]]

    let min = Infinity;

    const bfs = (row,col) =>{
        const needVisit = [[row,col]]
        
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

    const find = (start,needVisit,visited) =>{
        while(needVisit.length){
            let [row,col,dist] = needVisit.shift();
            visited[row][col] = true;

            for(let i =0; i<dir.length; i++){
                let nexr = row + dir[i][0];
                let nexc = col + dir[i][1];
                if(nexr>=0 && nexr<N && nexc>=0 && nexc<N && !visited[nexr][nexc]){
                    if(Board[nexr][nexc] === 0){
                        needVisit.push([nexr,nexc,dist+1])
                    }else if(Board[nexr][nexc] !== start){
                        min = min<dist? min:dist
                    }
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
        let nv2 = [];
        for(let j=0; j<nv.length; j++){
            let [nrow,ncol] = nv[j];
            for(let k =0; k<dir.length; k++){
                let nexrow = nrow + dir[k][0];
                let nexcol = ncol + dir[k][1];
                if(nexrow >=0 && nexrow<N && nexcol >=0 && nexcol<N && Board[nexrow][nexcol] === 0){
                    nv2.push([nexrow,nexcol,1])
                }
            }
        }

        find(i,nv2,v)
    }

    console.log(min)
}