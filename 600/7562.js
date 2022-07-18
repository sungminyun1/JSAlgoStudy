const input = `3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1`.split('\n').map(val=>val.split(' ').map(Number));

const [N] = input.shift();
for(let i =0; i<input.length; ){
    const [I] = input[i++];
    const start = input[i++];
    const target = input[i++];
    main(I,start,target);
}

function main(I,Start,Target){
    const direction =[[-2,-1],[-1,-2],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2]];
    const visited = [];
    for(let i =0; i<I; i++){
        visited.push(new Array[I].fill(false));
    }

    const findNext = (point) =>{
        const [row,col] = point;
        const result = []
        for(let i =0; i<direction.length; i++){
            let nrow = row + direction[i][0];
            let ncol = col + direction[i][1];
            if(nrow>=0 && nrow<I && ncol>=0 && ncol<I && !visited[nrow][ncol]){
                result.push([nrow,ncol])
            }
        }
        return result;
    }

    let needVisit = findNext(Start);
    let count = 0;
    while(true){
        count++
        let next = [];
        for(let i =0; i<needVisit.length; i++){
            let [row,col] = needVisit.shift();
            if(row===Target[0] && col === Target[1]){
                console.log(count);
                return;
            }
        }
    }
}