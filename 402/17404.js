const input = `3
26 40 83
49 60 57
13 89 99`.split('\n').map(val=>val.split(' ').map(Number));
input.shift();

main(input);

function main(Arr){
    let memo = [];

    for(let i =0; i<Arr.length; i++){
        let prev = i-1 < 0? Arr.length-1 : i-1;
        let next = i+1 >= Arr.length? 0 : i+1;

    }
}