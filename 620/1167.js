const input = `6
1 2 3 -1
2 1 3 5 3 3 5 -1
3 2 5 4 7 -1
4 3 7 -1
5 2 3 6 5 -1
6 5 5 -11`.split('\n');

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const N = +input.shift();

const graph = [];
const rc = new Array(N+1).fill(0)
for(let i =0; i<N+1; i++){
    graph.push([])
}

for(let i =0; i<input.length; i++){
    const arr = input[i].split(' ').map(Number);
    for(let j =1; j<arr.length-1; j+=2){
        rc[arr[j]]++
        graph[arr[0]].push([arr[j],arr[j+1]])
    }
}

const root = rc.indexOf(1)
let max = [0];

const find = (start) =>{
    const needVisit = [[start,0]];
    const visited = []
    while(needVisit.length){
        const [now,dist] = needVisit.shift();
        if(visited[now]) continue;
    
        visited[now] = true;
        if(max[0]<dist){
            max[0] = dist;
            max[1] = now;
        }
    
        for(let i =0; i<graph[now].length; i++){
            const [next,len] = graph[now][i];
            if(!visited[next]){
                needVisit.push([next,dist+len])
            }
        }
    }
}

find(root)
find(max[1])

console.log(max[0])
