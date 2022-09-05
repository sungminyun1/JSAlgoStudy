const input = `19
1 2 3
2 4 5
3 6 7
4 8 -1
5 9 10
6 11 12
7 13 -1
8 -1 -1
9 14 15
10 -1 -1
11 16 -1
12 -1 -1
13 17 -1
14 -1 -1
15 18 -1
16 -1 -1
17 -1 19
18 -1 -1
19 -1 -1`.split('\n');

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

const N = +input.shift();

main(N,input.map(val=>val.split(' ').map(Number)))

function main(N,Graph){
    const rc = new Array(N+1).fill(0);
    const graph = [];

    for(let i =0; i<Graph.length; i++){
        graph[Graph[i][0]] = [Graph[i][1],Graph[i][2]]
        for(let j =0; j<Graph[i].length; j++){
            if(Graph[i][j] !== -1){
                rc[Graph[i][j]]++
            }
        }
    }

    const root = rc.indexOf(1)
    const his = [];

    const find = (now,level) =>{
        const [left,right] = graph[now];
        if(left !== -1){
            find(left,level+1)
        }
        his.push(level)
        if(right !== -1){
            find(right,level+1)
        }
        
    }

    find(root,1)

    let max = [root,1]
    const check = [];
    for(let i=0; i<his.length; i++){
        let now = his[i]
        if(!check[now]){
            for(let j = his.length-1; j>=i; j--){
                if(now === his[j]){
                    let dist = j-i+1;

                    if(dist > max[1]){
                        max[0] = now;
                        max[1] = dist;
                    }else if(dist === max[1] && now < max[0]){
                        max[0] = now;
                    }
                }
            }
        }
        check[now] = true;
    }

    console.log(max.join(' '))
}