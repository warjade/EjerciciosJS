const numbers = [11,9,13,12]

// Paste your functions here

// Put your code here
function ordenarArray(a, b, numbers) {
    let temp = numbers[a]
    for(let outer = a ; outer <= b; outer++){
        for(let inner= a; inner <= b; inner++){
            if(numbers[outer] < numbers[inner]){
                temp = numbers[outer];
                numbers[outer] = numbers[inner];
                numbers[inner] = temp;         
            }
        }
    }
}
ordenarArray(0,3,numbers)

console.log(numbers);
console.log(numbers);