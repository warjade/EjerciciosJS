const numbers = [11,9,13,12]

// Put your code here
function minorInRange(a, b, numbers) {
    let minor = Infinity;
    for (let idx = a; idx <= b ; idx++) {
        if (numbers[idx] < minor) {
            minor = numbers[idx];
        }
     
    }
    return minor;
}
console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3),numbers);