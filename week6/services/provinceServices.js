const Provinces = require('../models').Provinces;
const parser = require('../utils/util').parseDataFromBody;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports ={
    create(req,res){
        let data = parser(req,res);
        return Provinces
            .create(data)
            .then(provinces => res.status(201).send(provinces))
            .catch(error => res.status(400).send(error));
    },
    getAll(req,res){
        return Provinces
            .findAll()
            .then(provinces => res.status(200).send(provinces))
            .catch(error => res.status(400).send(error));
    },
    getById(req,res){
        return Provinces
            .findByPk(req.params.id)
            .then(provinces => {
                if(!provinces){
                    return res.status(404).send({
                        message: 'Province Not Found'
                    });
                }
                return res.status(200).send(provinces)
            })
            .catch(error => res.status(400).send(error));
    },
    getByName(req,res){
        return Provinces
        .findAll({ where: { name:{
            [Op.like]: `${req.body.search}`
        }}})
        .then(provinces => {
            if(!provinces){
                return res.status(404).send({
                    message: 'Province Not Found',
                })
            }
            return res.status(200).send(provinces)
        })
        .catch(error => {
            return res.status(400).send(error)
        })
    },
    update(req,res){
        let data = parser(req,res);
        return Provinces
            .findByPk(req.params.id)
            .then(provinces => {
                if(!provinces){
                    return res.status(404).send({
                        message: 'Province Not Found',
                    });
                }
                return provinces
                    .update(data)
                    .then(() => res.status(200).send(provinces))
                    .catch(error => res.status(404).send(error));
            })
            .catch(error => res.status(400).send(error))
    },
    delete(req,res){
        return Provinces
            .findByPk(req.params.id)
            .then(provinces => {
                if(!provinces){
                    return res.status(404).send({
                        message: 'Province Not Found'})
                }
                return provinces
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}