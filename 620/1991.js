const input = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`.split('\n')

const N = +input.shift();

main(N,input.map(val=>val.split(' ')))
function main(N,Arr){
    const graph = {}

    for(let i =0; i<Arr.length; i++){
        graph[Arr[i][0]] = [Arr[i][1],Arr[i][2]]
    }

    const pres = [];
    const mres = [];
    const lres = [];
}