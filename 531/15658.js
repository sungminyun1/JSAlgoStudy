const input = `6
1 2 3 4 5 6
3 2 1 1`.split('\n').map(val=>val.split(' ').map(Number))

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(val=>val.split(' ').map(Number))

const [N] = input[0];
const Nums = input[1];
const Calcs = input[2]

let max = -Infinity;
let min = Infinity;

const find = (level,val) =>{
    if(level >= N-1){
        if(max < val) max = val;
        if(min > val) min = val;
        return;
    }

    for(let i =0; i<Calcs.length; i++){
        if(Calcs[i] >0){
            Calcs[i]--;
            let nval
            switch(i){
                case 0:
                    nval = val + Nums[level+1];
                    break;
                case 1:
                    nval = val - Nums[level+1];
                    break;
                case 2:
                    nval = val * Nums[level+1];
                    break;
                case 3:
                    if(val <0){
                        nval = Math.floor((val*(-1))/Nums[level+1]) * (-1)
                    }else{
                        nval = Math.floor(val/Nums[level+1])
                    }
            }
            find(level+1,nval);
            Calcs[i]++
        }
    }
}
find(0,Nums[0])

console.log(max === -0? 0:max)
console.log(min)