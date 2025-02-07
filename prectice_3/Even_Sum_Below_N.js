let num = 6;
let max = 0;

for (let i = 0; i <= num; i++) {
    
    if (i % 2 == 0) {
        max += i;
    }
}

console.log(max);
