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

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

main(+input.shift(),input.map(val=>val.split(' ').map(Number)))

function main(N,Board){
    let token = 0;
    const dir = [[0,1],[1,0],[-1,0],[0,-1]]
    const land = [];

    let min = Infinity;

    const dfs = (nowr,nowc) =>{
        if(Board[nowr][nowc] === token) return;
        Board[nowr][nowc] = token;
        land[token*(-1)].push([nowr,nowc,0])
        for(let i =0; i<dir.length; i++){
            const nexr = nowr + dir[i][0];
            const nexc = nowc + dir[i][1];
            if(nexr >=0 && nexr < N && nexc >=0 && nexc <N && Board[nexr][nexc] === 1){
                dfs(nexr,nexc)
            }
        }
    }

    const find = (start,needVisit,visited) =>{
        while(needVisit.length){
            let [row,col,dist] = needVisit.shift();
            if(visited[row][col]) continue;
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
                land[token*(-1)] = [];
                dfs(i,j)
            }
        }
    }

    for(let i = 1; i<land.length; i++){
        let v =[];
        for(let j =0; j<N; j++){
            v.push([]);
        }
        find(i*(-1),land[i],v)
    }
    console.log(min)
}