const numbers = [0,1,2,4,5,9,3,6,7,8];

for (let idx in numbers) {
    idx = parseInt(idx)
    console.log(`Index: ${idx}. Value: ${numbers[idx]}`);
    // Put your code here
}

console.log(numbers)