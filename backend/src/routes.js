const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const NeuroController = require('./controllers/NeuroController');
const QueryController = require('./controllers/QueryController');
const SessionController = require('./controllers/SessionController')


routes.post('/neuro', NeuroController.create);
routes.post('/user', UserController.create);
routes.post('/session/user', SessionController.SessionUser);
routes.post('/session/neuro', SessionController.SessionNeuro);
routes.post('/task', TaskController.create);
routes.post('/querie', QueryController.create);
routes.get('/dashboard', TaskController.index);
routes.get('/users', UserController.index);
routes.get('/querie', QueryController.index);
routes.get('/querie/neuro', QueryController.indexNeuro);

module.exports = routes;

