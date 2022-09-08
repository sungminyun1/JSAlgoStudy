const input = `12
1 2
1 3
2 4
3 5
3 6
4 7
4 8
5 9
5 10
6 11
6 12`.split(`\n`);

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const N = input.shift();

main(N,input)
function main(N,Arr){
    const graph = [];

    for(let i =0; i<=N; i++){
        graph.push([])
    }

    for(let i =0; i<Arr.length; i++){
        const [from,to] = Arr[i].split(' ').map(Number);
        graph[from].push(to);
        graph[to].push(from)
    }
    const visit = [];
    const parent = [];
    const needVisit = [1];

    while(needVisit.length){
        const now = needVisit.shift();

        if(visit[now]) continue;

        visit[now] = true;

        for(let i =0; i<graph[now].length; i++){
            let tmp = graph[now][i];
            if(!visit[tmp]){
                parent[tmp] = now;
                needVisit.push(tmp)
            }
        }
    }

    let res = ''
    for(let i =2; i<parent.length; i++){
        if(i === parent.length-1){
            res += `${parent[i]}`
        }else{
            res += `${parent[i]}\n`
        }
    }
    console.log(res)
}