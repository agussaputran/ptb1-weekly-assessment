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
    if (data.length < 1 || id.length < 0 || id < 0) {
        console.log(`Not Enough Data or Input false`)
        return false;
    } else {
        let found = data.find(x => x.id == id)
        if (found == undefined) {
            // console.log(`data with id ${id} not found`)
            return false
        } else {
            // console.log(found)
            return found
        }
    }
}
// console.log(findData(1))
// console.log(data[1].firstName = "bukanarman")

// function to update data in object array base on param id
const updateData = (id, newData) => {
    if (typeof newData === "object") {
        if (findData(id) !== false) {
            if (newData.firstName !== undefined) {
                data[id - 1].firstName = newData.firstName;
                data[id - 1].lastName = newData.lastName;
                data[id - 1].age = newData.age;
                console.log("New Data: \n", data)
            } else {
                console.log("the object structure in the second parameter does not match with db in data.js")
            }
        } else {
            console.log(`data with id ${id} not found`)
        }
    } else {
        console.log("Wrong Data Object")
    }

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
    // console.log(`data with id ${id} not found`)
}

const deleteData = (id) => {
    // in this function
    // you have to delete data with the appropriate id of param
    // if the data doesn't exist then just print data not found
    // console.log(`data with id ${id} not found`);
    if (findData(id) !== false) {
        data.splice(id - 1, 1)
        console.log("New Data: \n", data)
    } else {
        console.log(`data with id ${id} not found`)
    }
}

// findData(1)
/* expected output :
                   data with id 1 found: 
                       { id: 1, firstName: 'Agus', lastName: 'Saputra', age: 24 }
               */

// findData(9) // expected output : data with id 9 not found


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