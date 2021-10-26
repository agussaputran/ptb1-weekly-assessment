const reversedString = (str) => {
    // process
    //ini buat taruh string hasil reverse
    var newString = ""

    //for loop dari char paling belakang, 
    for(var i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString// return a value
}

const checkEvenOdd = (number) => {
    // process
    // even kalau angka habis dibagi 2 / num % 2 == 0, kalau tidak, jadi odd
    if(number % 2 == 0) {
        return (`${number} is even number`)
    } else {
        return (`${number} is odd number`)
    }
    
}

console.log(reversedString("pagi")); // expected output : igap
console.log(checkEvenOdd(7)); // expected output : 7 is Odd Number


function sumOfArray(arr1, arr2) {
    let result = 0
    // the logic 
    // type the code below
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    const sumArray1 = arr1.reduce(reducer)
    const sumArray2 = arr2.reduce(reducer)
    result = sumArray1 + sumArray2
    // type the code above
    return result
}

console.log(sumOfArray([1,2,3,5], [1,2,3])) // expected output : 17
console.log(sumOfArray([1,2,3], [1,2,3,2])) // expected output : 14