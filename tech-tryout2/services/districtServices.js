const Districts = require('../models').Districts;
const parser = require('../utils/util').parseDataFromBody;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports ={
    create(req,res){
        let data = parser(req,res);
        return Districts
            .create(data)
            .then(districts => res.status(201).send(districts))
            .catch(error => res.status(400).send(error));
    },
    getAll(req,res){
        return Districts
            .findAll()
            .then(districts => res.status(200).send(districts))
            .catch(error => res.status(400).send(error));
    },
    getById(req,res){
        return Districts
            .findByPk(req.params.id)
            .then(districts => {
                if(!districts){
                    return res.status(404).send({
                        message: 'Regency Not Found'
                    });
                }
                return res.status(200).send(districts)
            })
            .catch(error => res.status(400).send(error));
    },
    getByName(req,res){ // http://localhost:8000/province/?name=ba untuk cari dengan keyword "ba"
        return Districts
        .findAll({ where: { name:{
            [Op.iLike]: `%${req.body.search}%`
        }}})
        .then(districts => {
            if(!districts){
                return res.status(404).send({
                    message: 'Province Not Found',
                })
            }
            return res.status(200).send(districts)
        })
        .catch(error => {
            return res.status(400).send(error)
        })
    },
    update(req,res){
        let data = parser(req,res);
        return Districts
            .findByPk(req.params.id)
            .then(districts => {
                if(!districts){
                    return res.status(404).send({
                        message: 'Province Not Found',
                    });
                }
                return districts
                    .update(data)
                    .then(() => res.status(200).send(districts))
                    .catch(error => res.status(404).send(error));
            })
            .catch(error => res.status(400).send(error))
    },
    delete(req,res){
        return Districts
            .findByPk(req.params.id)
            .then(districts => {
                if(!districts){
                    return res.status(404).send({
                        message: 'Province Not Found'})
                }
                return districts
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}