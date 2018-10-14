function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);


function addUpTo2ndVersion(num){
    return num * (num + 1) / 2
}

var t3 = performance.now();
addUpTo(1000000000);
var t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`);