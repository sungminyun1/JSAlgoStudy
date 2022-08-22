const input = `6`

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim()

main(+input)

function main(Target){
    const needVisit = [[1,1,1]]
    const visited = []
    while(needVisit.length){
        let [now,clip,depth] = needVisit.shift();

        if(visited[now] === clip) continue;

        if(now === Target){
            console.log(depth)
            return;
        }
        
        visited[now] = clip;

        const candi = [[now+clip,clip,depth+1],[now,now,depth+1],[now-1,clip,depth+1]]
        for(let i =0; i<candi.length; i++){
            let [cn,cc,cd] = candi[i];
            if(cn>=2 && cn<=1000 && visited[cn] !== clip){
                needVisit.push(candi[i])
            }
        }
    }
}