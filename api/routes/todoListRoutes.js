'use strict';
var express = require('express');
var router = express.Router();

    var todoList_controller = require('../controller/todoListController');


   router.get('/tasks', todoList_controller.list_all_tasks);


   router.post('/tasks', todoList_controller.create_a_task);

    router.get('/tasks/:taskId', todoList_controller.read_a_task);

    router.put('/tasks/:taskId', todoList_controller.update_a_task);

    router.delete('/tasks/:taskId', todoList_controller.delete_a_task);

    module.exports = router;


