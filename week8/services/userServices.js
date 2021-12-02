const Users = require('../models').Users;
const parser = require('../utils/util').parseDataFromBody;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports ={
    create(req,res){
        let data = parser(req,res);
        return Users
            .create(data)
            .then(users => res.status(201).send(users))
            .catch(error => res.status(400).send(error));
    },
    getAll(req,res){
        return Users
            .findAll()
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },
    getById(req,res){
        return Users
            .findByPk(req.params.id)
            .then(users => {
                if(!users){
                    return res.status(404).send({
                        message: 'User Not Found'
                    });
                }
                return res.status(200).send(users)
            })
            .catch(error => res.status(400).send(error));
    },
    getByName(req,res){ // http://localhost:8000/province/?name=ba untuk cari dengan keyword "ba"
        return Users
        .findAll({ where: { name:{
            [Op.iLike]: `%${req.body.search}%`
        }}})
        .then(users => {
            if(!users){
                return res.status(404).send({
                    message: 'User Not Found',
                })
            }
            return res.status(200).send(users)
        })
        .catch(error => {
            return res.status(400).send(error)
        })
    },
    update(req,res){
        let data = parser(req,res);
        return Users
            .findByPk(req.params.id)
            .then(users => {
                if(!users){
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return users
                    .update(data)
                    .then(() => res.status(200).send(users))
                    .catch(error => res.status(404).send(error));
            })
            .catch(error => res.status(400).send(error))
    },
    delete(req,res){
        return Users
            .findByPk(req.params.id)
            .then(users => {
                if(!users){
                    return res.status(404).send({
                        message: 'User Not Found'})
                }
                return users
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}