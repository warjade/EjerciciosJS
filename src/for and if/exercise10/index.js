let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]

// Put your code here

for (let idx = 0; idx < numbers.length ; idx++) {
    for (let comparacion = idx+1 ; comparacion < numbers.length ; comparacion++){      
    
        if (numbers[idx] > numbers[comparacion]) {
            temp = numbers[idx];
            numbers[idx] = numbers[comparacion];
            numbers[comparacion] = temp;
            console.log(numbers)
        }
    }
}
