const input = `6 6
001111
010000
001111
110001
011010
100010`.split('\n')

const [N,M] = input.shift().split(' ').map(Number);

main(N,M,input.map(val=>val.split('').map(Number)))

function main(N,M,Board){
    console.log(N,M,Board)
}