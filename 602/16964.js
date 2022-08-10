const input = `4
1 2
1 3
2 4
1 2 4 3`.split('\n');

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

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
    console.log(N,Graph,T)
    const visited = [];
    let idx = 0;

    const dfs = (now) =>{
        if(visited[now]){
            return;
        }
        visited[now] = true;

    }
}