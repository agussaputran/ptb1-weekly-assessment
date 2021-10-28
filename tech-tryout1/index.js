function sumOfArray(arr1, arr2) {
    let result = 0;
    let a = arr1.length;
    let b = arr2.length;

    
    for(let deadline=0; deadline<a; deadline++)
    {
     result = result + arr1[deadline];
    }
    
    for(let deadline=0; deadline<b; deadline++)
    {
     result = result + arr2[deadline];
    }
    
    
    return result
    }

console.log(sumOfArray([1,2,3,5], [1,2,3])) // expected output : 17
console.log(sumOfArray([1,2,3], [1,2,3,2])) // expected output : 14