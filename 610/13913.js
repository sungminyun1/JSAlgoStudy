const input = `5 17`.split(' ').map(Number);

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

main(input[0],input[1])

function main(Start,Target){
    const needVisit = [[Start,0]];
    const visited = []
    const path = new Array(100000).fill(-1);
    while(needVisit.length){
        const [now,len] = needVisit.shift();
        // if(visited[now]>=0) continue;

        if(now === Target){
            let order = [now]
            let val = path[now];
            for(let i =0; i<len; i++){
                order.push(val)
                val = path[val]
            }
            console.log(len)
            console.log(order.reverse().join(' '))
            return
        }

        const dir = [1,-1,now]
        for(let i=0; i<dir.length; i++){
            let next = now + dir[i];
            if(next>=0 && next <=100000 && !visited[next]){
                needVisit.push([next,len+1])
                path[next] = now;
                visited[next] = true
            }
        }
    }
}

// function main(Start,Target){
//     const pool = [];
//     const visited = []

//     const dfs = (now) =>{
//         if(now === Target){
//             console.log(pool);
//             return;
//         }

//         const dir = [1,-1,now]
//         for(let i =0; i<dir.length; i++){
//             let next = now + dir[i];
//             if(next >=0 && next <= 100000 && !visited[next]){
//                 pool.push(now);
//                 visited[now] = true;
//                 dfs(next);
//                 visited[now] = false;
//                 pool.pop();
//             }
//         }
//     }

//     dfs(Start)

// }