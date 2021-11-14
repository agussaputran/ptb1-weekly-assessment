const { Provinces, Regencies } = require('./models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

// Find all provinces with their associated regencies
// Raw SQL: SELECT * FROM "Provinces" JOIN "Regencies" ON "Regencies"."province_id" = "Provinces".id;

const findAllWithRegencies= async () => {
    const provinces = await Provinces.findAll({
        include: [{
            model: Regencies
        }]
    });
    console.log("All provinces with their associated regencies:", JSON.stringify(provinces, null, 4));
}

// Find a regencies with its associated provinces
// Raw SQL: SELECT * FROM "Regencies" JOIN "Provinces" ON "Provinces"."id" = "Regencies"."province_id";

const findRegenciesWithProvinces = async () => {
    const regencies = await Regencies.findAll({
        include: [{
            model: Provinces
        }]
    });
    console.log("All regencies with their associated province:", JSON.stringify(regencies, null, 4));
}


const run = async () => {
    await findAllWithRegencies()
    await process.exit()
}



run()