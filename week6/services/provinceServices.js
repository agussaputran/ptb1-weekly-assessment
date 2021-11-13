const Provinces = require('../models').provinces; // sama aja g usah bingung. sama kayak require('../models/todo')
const parser = require('../utils/util').parseDataFromBody;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// SERVICES UNTUK MODEL TODO
module.exports ={

    // create(req, res){
    //     let data = parser(req,res);
    //     return provinces
    //         .create(data)
    //         .then(todo => res.status(201).send(todo))
    //         .catch(error => res.status(400).send(error));
    // },
    getAll(req, res){
        return Provinces
            .findAll()
            .then(provinces => res.status(200).send(provinces))
            .catch(error => res.status(400).send(error));
    },
    // getById(req, res){
    //     return provinces
    //         .findByPk(req.params.id)
    //         .then(todo => {
    //         if (!todo) {
    //             return res.status(404).send({
    //                 message: 'Todo Not Found',
    //             });
    //         }

    //             return res.status(200).send(todo)

    //         })
    //         .catch(error => res.status(400).send(error));
    // },
    // getByName(req,res){
    //    console.log(req.body.search)
    //     return Todo
    //         .findAll({ where: { name:{
    //             [Op.like]: `%${req.body.search}%`
    //           }}})
    //         .then(todo => {
    //             // console.log("lateeee",todo.is_late)
    //             if(!todo) {
    //                 return res.status(404).send({
    //                     message: 'Todo Not Found',
    //                 })
    //             }

    //             return res.status(200).send(todo)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             return res.status(400). send(error)
    //         })
    // },
    // update(req, res){
    //     let data = parser(req,res);
    //     return Todo
    //         .findByPk(req.params.id)
    //         .then(todo => {
    //             if (!todo) {
    //                 return res.status(404).send({
    //                     message: 'Todo Not Found',
    //                 });
    //             }
    //             return todo
    //                 .update(data)
    //                 .then(() => res.status(200).send(todo))
    //                 .catch((error) => res.status(400).send(error));
    //         })
    //         .catch(error => res.status(400).send(error));
    // },
    // delete(req, res){
    //     return Todo
    //         .findByPk(req.params.id)
    //         .then(todo => {
    //             if (!todo) {
    //                 return res.status(404).send({
    //                     message: 'Todo Not Found',
    //                 });
    //             }
    //             return todo
    //                 .destroy()
    //                 .then(() => res.status(204).send())
    //                 .catch(error => res.status(400).send(error));
    //         })
    //         .catch(error => res.status(400).send(error));
    // }
}