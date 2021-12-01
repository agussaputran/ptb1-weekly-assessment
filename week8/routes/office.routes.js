module.exports = app => {
  const office = require("../controllers/office.controller.js");

  var router = require("express").Router();

  // Retrieve all offices
  router.get("/", office.findAll);

  // Retrieve all offices
  router.get("/", office.findAll);

  // Retrieve 1 office
  router.get("/:id", office.findOne);

  // Retrieve offices in a province based on user Id
  router.get("/scope/province/reff/user/:id", office.GetOfficesByUserId);

  app.use('/api/offices', router);
};