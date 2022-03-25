const Regencies = require('../models').Regencies;
const parser = require('../utils/util').parseDataFromBody;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports ={
    create(req,res){
        let data = parser(req,res);
        return Regencies
            .create(data)
            .then(regencies => res.status(201).send(regencies))
            .catch(error => res.status(400).send(error));
    },
    getAll(req,res){
        return Regencies
            .findAll()
            .then(regencies => res.status(200).send(regencies))
            .catch(error => res.status(400).send(error));
    },
    getById(req,res){
        return Regencies
            .findByPk(req.params.id)
            .then(regencies => {
                if(!regencies){
                    return res.status(404).send({
                        message: 'Regency Not Found'
                    });
                }
                return res.status(200).send(regencies)
            })
            .catch(error => res.status(400).send(error));
    },
    getByName(req,res){ // http://localhost:8000/province/?name=ba untuk cari dengan keyword "ba"
        return Regencies
        .findAll({ where: { name:{
            [Op.iLike]: `%${req.body.search}%`
        }}})
        .then(regencies => {
            if(!regencies){
                return res.status(404).send({
                    message: 'Regency Not Found',
                })
            }
            return res.status(200).send(regencies)
        })
        .catch(error => {
            return res.status(400).send(error)
        })
    },
    update(req,res){
        let data = parser(req,res);
        return Regencies
            .findByPk(req.params.id)
            .then(regencies => {
                if(!regencies){
                    return res.status(404).send({
                        message: 'Regency Not Found',
                    });
                }
                return regencies
                    .update(data)
                    .then(() => res.status(200).send(regencies))
                    .catch(error => res.status(404).send(error));
            })
            .catch(error => res.status(400).send(error))
    },
    delete(req,res){
        return Regencies
            .findByPk(req.params.id)
            .then(regencies => {
                if(!regencies){
                    return res.status(404).send({
                        message: 'Regency Not Found'})
                }
                return regencies
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}