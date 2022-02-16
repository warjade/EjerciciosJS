// For / in. Accesing values by index.
const numbers = [0,1,2,4,5,9,3,6,7,8];
for (let idx in numbers) {
    console.log(`Índice: ${idx}. Valor: ${numbers[idx]}`);
}

// Moving values
const vowels = ["a","i","e","o","u"];
console.log("Desordenado:", vowels);
let temp = null;
temp = vowels[1];
vowels[1] = vowels[2];
vowels[2] = temp;
console.log("Ordenado:", vowels);