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