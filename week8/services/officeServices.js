const { Provinces, Regencies, Offices, SubDistricts, Districts } = require('../models')
const parser = require('../utils/util').parseDataFromBody;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports ={
    create(req,res){
        let data = parser(req,res);
        return Offices
            .create(data)
            .then(offices => res.status(201).send(offices))
            .catch(error => res.status(400).send(error));
    },
    getAll(req,res){
        return Offices
            .findAll()
            .then(offices => res.status(200).send(offices))
            .catch(error => res.status(400).send(error));
    },
    getById(req,res){
        return Offices
            .findByPk(req.params.id)
            .then(offices => {
                if(!offices){
                    return res.status(404).send({
                        message: 'Office Not Found'
                    });
                }
                return res.status(200).send(offices)
            })
            .catch(error => res.status(400).send(error));
    },
    getByUserLocation(req,res){
        return Offices
            .findAll({
                where:{
                    sub_districts_id:req.params.id
                },
                include:{
                    model:SubDistricts,
                    include:{
                        model:Districts,
                        include:{
                            model:Regencies,
                            include: {
                                model:Provinces
                            }
                        }
                    }
                }
            })
            .then(offices => {
                if(!offices){
                    return res.status(404).send({
                        message: 'Office Not Found'
                    });
                }
                return res.status(200).send(offices)
            })
            .catch(error => res.status(400).send(error));
    },
    getByName(req,res){ // http://localhost:8000/province/?name=ba untuk cari dengan keyword "ba"
        return Offices
        .findAll({ where: { name:{
            [Op.iLike]: `%${req.body.search}%`
        }}})
        .then(offices => {
            if(!offices){
                return res.status(404).send({
                    message: 'Office Not Found',
                })
            }
            return res.status(200).send(offices)
        })
        .catch(error => {
            return res.status(400).send(error)
        })
    },
    update(req,res){
        let data = parser(req,res);
        return Offices
            .findByPk(req.params.id)
            .then(offices => {
                if(!offices){
                    return res.status(404).send({
                        message: 'Office Not Found',
                    });
                }
                return offices
                    .update(data)
                    .then(() => res.status(200).send(offices))
                    .catch(error => res.status(404).send(error));
            })
            .catch(error => res.status(400).send(error))
    },
    delete(req,res){
        return Offices
            .findByPk(req.params.id)
            .then(offices => {
                if(!offices){
                    return res.status(404).send({
                        message: 'Office Not Found'})
                }
                return offices
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}