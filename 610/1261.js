const input = `4 2
0001
1000`.split('\n')

const [N,M] = input.shift().split(' ').map(Number);

main(N,M,input.map(val=>val.split('').map(Number)))

function main(M,N,Board){
    const firstQ = [[0,0,0]];
    const secondQ = [];
    const visited = [];
    for(let i =0; i<N; i++){
        visited.push([])
    }

    const dir = [[0,1],[1,0],[0,-1],[-1,0]]

    while(firstQ.length || secondQ.length){
        let row,col,dep;
        if(firstQ.length){
            [row,col,dep] = firstQ.shift();
        }else{
            [row,col,dep] = secondQ.shift();
        }

        if(visited[row][col]) continue;

        if(row === N-1 && col === M-1){
            console.log(dep)
            return;
        }

        visited[row][col] = true;
        for(let i =0; i<dir.length; i++){
            let nrow = row + dir[i][0];
            let ncol = col + dir[i][1];
            if(nrow >=0 && nrow <N && ncol>=0 && ncol<M && !visited[nrow][ncol]){
                if(Board[nrow][ncol] === 1){
                    secondQ.push([nrow,ncol,dep+1])
                }else{
                    firstQ.push([nrow,ncol,dep])
                }
            }
        }
    }
}