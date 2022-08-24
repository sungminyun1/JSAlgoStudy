const input = `5 17`.split(' ').map(Number);

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);
main(...input)

function main(Start,Target){
    const needVisit = [[Start,0]]
    const visited = []
    while(needVisit.length){
        const [now,dep] = needVisit.shift();
        if(visited[now])continue;
        if(now === Target){
            console.log(dep)
            return;
        }
        visited[now] = true;
        const candi = [[now+1,dep+1],[now-1,dep+1],[now*2,dep]]
        for(let i =0; i<candi.length; i++){
            let [next,nextd] = candi[i];
            if(next >=0 && next <=100000 && !visited[next]){
                if(i === 2){
                    needVisit.unshift(candi[i])
                }else{
                    needVisit.push(candi[i])
                }
                
            }
        }
    }
}