const SubDistricts = require('../models').SubDistricts;
const parser = require('../utils/util').parseDataFromBody;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports ={
    create(req,res){
        let data = parser(req,res);
        return SubDistricts
            .create(data)
            .then(subdistricts => res.status(201).send(subdistricts))
            .catch(error => res.status(400).send(error));
    },
    getAll(req,res){
        return SubDistricts
            .findAll()
            .then(subdistricts => res.status(200).send(subdistricts))
            .catch(error => res.status(400).send(error));
    },
    getById(req,res){
        return SubDistricts
            .findByPk(req.params.id)
            .then(subdistricts => {
                if(!subdistricts){
                    return res.status(404).send({
                        message: 'Regency Not Found'
                    });
                }
                return res.status(200).send(subdistricts)
            })
            .catch(error => res.status(400).send(error));
    },
    getByName(req,res){ // http://localhost:8000/province/?name=ba untuk cari dengan keyword "ba"
        return SubDistricts
        .findAll({ where: { name:{
            [Op.iLike]: `%${req.body.search}%`
        }}})
        .then(subdistricts => {
            if(!subdistricts){
                return res.status(404).send({
                    message: 'Province Not Found',
                })
            }
            return res.status(200).send(subdistricts)
        })
        .catch(error => {
            return res.status(400).send(error)
        })
    },
    update(req,res){
        let data = parser(req,res);
        return SubDistricts
            .findByPk(req.params.id)
            .then(subdistricts => {
                if(!subdistricts){
                    return res.status(404).send({
                        message: 'Province Not Found',
                    });
                }
                return subdistricts
                    .update(data)
                    .then(() => res.status(200).send(subdistricts))
                    .catch(error => res.status(404).send(error));
            })
            .catch(error => res.status(400).send(error))
    },
    delete(req,res){
        return SubDistricts
            .findByPk(req.params.id)
            .then(subdistricts => {
                if(!subdistricts){
                    return res.status(404).send({
                        message: 'Province Not Found'})
                }
                return subdistricts
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}