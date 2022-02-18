const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];

function classify (item, stringsArray, numbersArray) {

    // Put your code here

}

for (let item of mix) {
    let strings = [];
    let numbers = [];
    classify(item, numbers, strings);
}

console.log("Strings:",strings,"Numbers:",numbers)