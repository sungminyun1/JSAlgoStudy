const input = `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`.split('\n').map(val=>val.split(' ').map(Number));

const [K] = input.shift();

for(let i =0; i<input.length; ){
    const [V,E] = input[i++];
    let tmp = [];
    for(let j =0; j<E; j++,i++){
        tmp.push(input[i])
    }
    main(V,E,tmp)
}

function main(V,E,Arr){
    let count = 0;

    const graph = [];
    const visited = [];

    for(let i =0; i<=V; i++){
        graph[i] = [];
    }
    for(let i =0; i<Arr.length; i++){
        const [from,to] = Arr[i];
        graph[from].push(to);
        graph[to].push(from);
    }

    const dfs = (now) =>{
        visited[now] = true;
        for(let i =0; graph[now].length; i++){
            if(!visited[graph[now][i]]){
                dfs(graph[now][i])
            }
        }
    }

    for(let i = 1; i<=V; i++){
        if(!visited[i]){
            if(count === 2){
                console.log('NO');
                return;
            }
            count++;
            dfs(i)
        }
    }

    console.log(count === 2? 'YES': 'NO')
}