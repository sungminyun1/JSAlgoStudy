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

// function main(N,Graph,Target){
//     const needVisit = [Graph[1]];
//     const visited = [false,true]


//     let idx = 0;
//     while(idx<Target.length){
//         let candi = needVisit.shift();
//         for(let i =0; i<candi.length; i++){
//             idx++;
//             if(!Target[idx]){
//                 console.log(1)
//                 return;
//             }
//             if(!candi.includes(Target[idx])){
//                 console.log(0)
//                 return;
//             }
//             if(!visited[Target[idx]]){
//                 needVisit.push(Graph[Target[idx]])
//                 visited[Target[idx]] = true;
//             }
//         }
//     }




// }