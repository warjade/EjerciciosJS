function vat (price, vatType = 1/2) {
    return price ** vatType;
}
// Put your code here

console.log(vat(25))
console.log(vat(8,1/3))
console.log(vat(2,3))
console.log(vat(5,2))