const input = `4
1 2
1 3
2 4
1 2 3 4`.split('\n');

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const N = +input.shift();
const graph = [];

for(let i =0; i<=N; i++){
    graph.push([])
}

for(let i =0; i<input.length-1; i++){
    const [from,to] = input[i].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}
main(N,graph,input.pop().split(' ').map(Number))

function main(N,Graph,T){
    const visited = [];
    const sortkey = []
    for(let i =0; i<T.length; i++){
        sortkey[T[i]] = i
    }
    for(let i =1; i<=N; i++){
        Graph[i].sort((a,b)=>sortkey[a]-sortkey[b])
    }
    const pool = [1]
    let fail = false;
    const dfs = (now) =>{
        if(fail) return;
        visited[now] = true;
        for(let i =0; i<Graph[now].length; i++){
            if(!visited[Graph[now][i]]){
                pool.push(Graph[now][i])
                if(T[pool.length-1] !== Graph[now][i]){
                    fail = true;
                    return;
                }
                dfs(Graph[now][i])
            }
        }
    }
    dfs(1)
    console.log(fail?'0':'1')
}