const input = `4 9
8 52
6 80
26 42
2 72
51 19
39 11
37 29
81 3
59 5
79 23
53 7
43 33
77 21`.split('\n').map(val=>val.split(' ').map(Number))

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val=>val.split(' ').map(Number));

const [stair, snake] = input.shift();
const move = new Array(101).fill(0);

for(let i =0; i<input.length; i++){
    const [from,to] = input[i];
    move[from] = to;
}

let min = Infinity;

const visited = [];
const needVisit = [[1,0]];

while(needVisit.length){
    let [now,level] = needVisit.shift();
    

    if(!move[now]){
        visited[now] = true;
    }else{
        now = move[now]
    }
    
    if(visited[now] || now > 100) continue;
    
    if(now === 100){
        if(min>level) min = level;
        continue;
    }

    for(let i = 1; i<=6; i++){
        let next = now + i;
        if(!visited[next] || move[next]>0){
            needVisit.push([next,level+1])
        }
    }
}

console.log(min)
