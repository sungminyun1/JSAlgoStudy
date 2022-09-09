const input = `12
1 2 3
1 3 2
2 4 5
3 5 11
3 6 9
4 7 1
4 8 7
5 9 15
5 10 4
6 11 6
6 12 10`.split('\n');

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const N = +input.shift();

if(N === 1){
    console.log(0)
    return;
}

const tree = [];
for(let i =0; i<N+1; i++){
    tree.push([]);
}

for(let i =0; i<input.length; i++){
    const arr = input[i].split(' ').map(Number);
    tree[arr[0]].push([arr[1],arr[2]])
    tree[arr[1]].push([arr[0],arr[2]])
}

let max = 0;
let maxNode;
let visited = [];

const dfs = (now,len) =>{
    if(visited[now]) return;
    if (max<len){
        max = len;
        maxNode = now;
    }
    visited[now] = true;
    for(let i=0; i<tree[now].length; i++){
        let [next,dist] = tree[now][i];
        if(!visited[next]){
            dfs(next,len+dist)
        }
    }
}

dfs(1,0)
visited = [];
dfs(maxNode,0)

console.log(max)