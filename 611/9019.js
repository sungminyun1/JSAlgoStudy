const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const cases = +input.shift();
const res = input.map(val=>solve(...val.split(' ').map(Number)))

console.log(res.join('\n'))

function solve(From,To){
    const visited = new Array(10001).fill(false);

    //DSLR
    const move = [
        (val)=> (val*2)%10000,
        (val)=> val-1>=0?val-1:9999,
        (val)=> val*10%10000 + Math.floor(val/1000),
        (val)=> Math.floor(val/10) + val%10*1000
    ]

    const needVisited = [[From,'']];

    while(needVisited.length){
        const [val,his] = needVisited.shift();
        if(val === To){
            return his
        }
        if(visited[val]) continue;
        visited[val] = true;
        for(let i =0; i<move.length; i++){
            let next = move[i](val);
            if(!visited[next]){
                let token;
                if(i === 0){
                    token = 'D';
                }else if(i === 1){
                    token = 'S'
                }else if(i === 2){
                    token = 'L'
                }else if(i === 3){
                    token = 'R'
                }
                needVisited.push([next,his+token])
            }
        }
    }
}
