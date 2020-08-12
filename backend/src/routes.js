const express = require('express');
const multer = require('multer');
const routes = express.Router();

const multerConfig = require('./config/multer');
const uploads = multer(multerConfig);

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const QueryController = require('./controllers/QueryController');
const SessionController = require('./controllers/SessionController');


routes.post('/user', UserController.create);
routes.post('/session/user', SessionController.create);
routes.post('/task', TaskController.create);
routes.post('/querie', QueryController.create);
routes.get('/tasks', TaskController.index);
routes.get('/users', UserController.index);
routes.get('/querie', QueryController.index);
routes.delete('/delete/:task_id', TaskController.delete)
module.exports = routes;
