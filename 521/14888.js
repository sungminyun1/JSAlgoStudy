const input = `3
10 11 3
0 1 0 1`.split('\n').map(val=>val.split(' ').map(Number))

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(val=>val.split(' ').map(Number))

const [N] = input[0];
const Nums = input[1];
const calcs = input[2];
const count = calcs.reduce((acc,val)=>acc+val,0)

let max = -Infinity
let min = Infinity

const his =[]
const make = (idx,val) =>{
    if(idx >= count){
        if(val>max) max = val
        if(val<min) min = val
        return;
    }
    for(let i =0; i<calcs.length; i++){
        if(calcs[i]>0){
            calcs[i]--
            let nval;
            switch(i){
                case 0:
                    nval = val + Nums[idx+1];
                    break;
                case 1:
                    nval = val - Nums[idx+1];
                    break;
                case 2:
                    nval = val * Nums[idx+1];
                    break;
                case 3:
                    if(val <0){
                        nval = Math.floor((val*(-1))/Nums[idx+1]) * (-1)
                    }else{
                        nval = Math.floor(val/Nums[idx+1])
                    }
            }
            make(idx+1,nval)
            calcs[i]++
        }
    }
}
make(0,Nums[0])

console.log(max === -0? 0:max)
console.log(min)