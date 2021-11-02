const data = require("./db/data")

console.log("original data: \n", data)
/* 
output:
 original data: 
 [
  { id: 1, firstName: 'Agus', lastName: 'Saputra', age: 24 },
  { id: 2, firstName: 'Arman', lastName: 'Maulana', age: 50 },
  { id: 3, firstName: 'Raisa', lastName: 'Adriana', age: 31 },
  { id: 4, firstName: 'Isyana', lastName: 'Sarasvati', age: 28 },
  { id: 5, firstName: 'Nazril', lastName: 'Irham', age: 40 }
]
 */

// function to find data in object array
const findData = (id) => {
    // in this function you have to find data in data provided with id from param
    // if the data doesn't exist then just print data not found
    const record = data.find((item) => item.id === parseInt(id));
    if (!record) {
        console.log(`Data with id ${id} NOT found`)
    } else {
        console.log(`Data with id ${id} found!`)
    }
    
    return record;

}

// function to update data in object array base on param id
const updateData = (id, newData) => {
    // in this function 
    // you have to update data with the appropriate id of param
    // the second param should be object with the same structure with db from data.js
    /*
    {
        id: 1,
        firstName: "Agus",
        lastName: "Saputra",
        age: 24
    }
    */
    // if the second param(newData) is not object then just print "the second parameter must be object"
    // if the second parameter does not have any of the appropriate properties(firstName,lastName,age) then
    // just print "the object structure in the second parameter does not match with db in data.js"
    // if the data doesn't exist then just print data not found
    const record = findData(id);
    if (!record) {
        console.log(`Data with id ${id} NOT updated...`)
    } else if (typeof newData !== 'object') {
        console.log(`Data with id ${id} NOT updated... The second parameter must be object.`)
    } else if (!newData.hasOwnProperty('firstName') || !newData.hasOwnProperty('lastName') || !newData.hasOwnProperty('age')) {
        console.log(`Data with id ${id} NOT updated... The object structure in the second parameter does not match with db in data.js.`)
    } else {
        Object.assign(record, newData)
        console.log(`Data with id ${id} was updated! Record after update:`, record)
    }
    return record;

}

const deleteData = (id) => {
    // in this function
    // you have to delete data with the appropriate id of param
    // if the data doesn't exist then just print data not found

    const record = findData(id);
    if (!record) {
        console.log(`Data with id ${id} NOT deleted...d`)
    } else {
        const index = data.indexOf(record);
        data.splice(index, 1);
        console.log(`Data with id ${id} deleted.`)
        console.log('Current database after deletion:', data)
    }
    return record
}

console.log('\n--- Test FIND data ---')
findData(1)
/* expected output :
                   data with id 1 found: 
                       { id: 1, firstName: 'Agus', lastName: 'Saputra', age: 24 }
               */

// findData(9) // expected output : data with id 9 not found

console.log('\n--- Test UPDATE data ---')
updateData(1, {
    firstName: "Agus",
    lastName: "Ntoi",
    age: 30
}) /* expected output :
        data with id 1 was updated
        new data: 
        [
        { id: 1, firstName: 'Agus', lastName: 'Ntoi', age: 30 },
        { id: 2, firstName: 'Arman', lastName: 'Maulana', age: 50 },
        { id: 3, firstName: 'Raisa', lastName: 'Adriana', age: 31 },
        { id: 4, firstName: 'Isyana', lastName: 'Sarasvati', age: 28 },
        { id: 5, firstName: 'Nazril', lastName: 'Irham', age: 40 }
        ]
    */
updateData(2, {
    lastName: "Ntoi",
    age: 30
}) // expected output : the object structure in the second parameter does not match with db in data.js

updateData(2, "string") // expected output : the second parameter must be object

updateData(9, {
    firstName: "Agus",
    lastName: "Ntoi",
    age: 30
}) // expected output: data with id 9 not found

console.log('\n--- Test DELETE data ---')
deleteData(1) /* expected output :
                    data with id 1 was deleted
                    new data: 
                    [
                    { id: 2, firstName: 'Arman', lastName: 'Maulana', age: 50 },
                    { id: 3, firstName: 'Raisa', lastName: 'Adriana', age: 31 },
                    { id: 4, firstName: 'Isyana', lastName: 'Sarasvati', age: 28 },
                    { id: 5, firstName: 'Nazril', lastName: 'Irham', age: 40 }
                    ]
                */

deleteData(10) // expected output : data with id 10 not found