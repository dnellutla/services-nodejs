'use  strict';
var express = require('express');
var router = express.Router();

var services_controller = require('../controller/serviceController');

router.get('/services', services_controller.list_all_services);

router.post('/services', services_controller.create_a_service);

router.get('/services/:serviceId', services_controller.read_a_service);

router.put('/services/:serviceId', services_controller.update_a_service);

router.delete('/services/:serviceId', services_controller.delete_a_service);

module.exports = router;
