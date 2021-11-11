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
    console.log(`data with id ${id} found:`) // ==== INPUT ==== pesan ini harusnya di munculkan pada saat data ditemukan
    data.filter(user => {
        if(user.id == id) {
            console.log(user)
        } 
    })
    // if the data doesn't exist then just print data not found
    // ==== INPUT ====
    // logic kurang tepat jika id pada data tidak berurutan atau acak maka hasilnya tidak akan sesuai
    // contoh length data 5 [100,20,30,50,95], id yang di cari 1 , 
    // maka pesan data not found tetap tidak akan muncul
    if(id > data.length){ 
        console.log(`Test data with id ${id} not found`)
    }
    console.log('____________________________________________________')
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
    // const id = request.params.id
    // divalidasi dl, bila semua sudah terpenuhi baru diupdate datanya
    if(typeof newData === 'object' && newData !== null){
        if(newData.firstName && newData.lastName && newData.age){
        // ======= INPUT ======= 
        // logic kurang tepat. apabila ada data dengan length 3
        // namun terdapat id 105 misal. maka data tidak akan terupdate
        // karna perbandingannya hanya dengan panjang data bukan dengan data didalamnya
        // bisa coba menggunakan perulangan untuk mengecek setiap data didalamnya
            if(id < data.length){ // atau pengecekan ini bisa dihilangkan
                // karena dengan array.filter sudah cukup
                // opsi lain bisa dengan menggunakan perulangan biasa
                // maupun built in function lainnya
                data.filter(user => {
                    if(user.id == id) { // dam karna disini sudah ada if nya maka dibawahnya bisa ditambahkan else dengan pesan data not found
                        user.id = id
                        user.firstName = newData.firstName
                        user.lastName = newData.lastName
                        user.age = newData.age
                        console.log(`data with id ${id} was updated`)
                        console.log('new data:')
                        console.log(data)
                        // return user
                    }
                })
            }
        }
    }
    
    // validasi kl data tidak mengikuti peraturannya

    // if the second param(newData) is not object then just print "the second parameter must be object"
    if(typeof newData !== 'object') {
        console.log('the second parameter must be object')
    }
    // if the second parameter does not have any of the appropriate properties(firstName,lastName,age) then
    // just print "the object structure in the second parameter does not match with db in data.js"
    if(!newData.firstName || !newData.lastName || !newData.age){
        console.log('the object structure in the second parameter does not match with db in data.js')
    }
    // if the data doesn't exist then just print data not found
    // console.log(`data with id ${id} not found`)
    // === INPUT ====
    if(id > data.length){ // sama seperti pada findData
        console.log(`Test data with id ${id} not found`)
    }
    console.log('____________________________________________________')
}

const deleteData = (id) => {
    // in this function
    // you have to delete data with the appropriate id of param
    console.log(`data with id ${id} was deleted`) // ===== INPUT ===== sama seperti findData
    console.log('new data:')
    data.filter(user => {
        if(user.id == id) {
            data.splice(id-1,1)
            console.log(data)
        } 
    })
    // if the data doesn't exist then just print data not found
    // ==== INPUT ====
    if(id > data.length){ // sama seperti pada findData
        console.log(`Test data with id ${id} not found`)
    }
    console.log('____________________________________________________')
    // if the data doesn't exist then just print data not found
}

findData(105)    
 /* expected output :
                    data with id 1 found: 
                        { id: 1, firstName: 'Agus', lastName: 'Saputra', age: 24 }
                */

// findData(9) // expected output : data with id 9 not found


updateData(105, {
    firstName: "Agus",
    lastName: "Ntoi",
    age: 30
}) 
/* expected output :
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


deleteData(1) 
/* expected output :
//                     data with id 1 was deleted
//                     new data: 
//                     [
//                     { id: 2, firstName: 'Arman', lastName: 'Maulana', age: 50 },
//                     { id: 3, firstName: 'Raisa', lastName: 'Adriana', age: 31 },
//                     { id: 4, firstName: 'Isyana', lastName: 'Sarasvati', age: 28 },
//                     { id: 5, firstName: 'Nazril', lastName: 'Irham', age: 40 }
//                     ]
//                 */

deleteData(10)
 // expected output : data with id 10 not found