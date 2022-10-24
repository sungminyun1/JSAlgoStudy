const input = `3 7
32 62
42 68
12 98
95 13
97 25
93 37
79 27
75 19
49 47
67 17`.split('\n').map(val=>val.split(' ').map(Number))

const [stair, snake] = input.shift()