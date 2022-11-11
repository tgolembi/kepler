const express = require('express');
const auth = require('./middleware/auth.js');
const UserController = require('./controllers/UserController.js');
const ManufacturerController = require('./controllers/ManufacturerController.js');
const ItemTypeController = require('./controllers/ItemTypeController.js');
const ItemController = require('./controllers/ItemController.js');
const PanelController = require('./controllers/PanelController.js');

const apiv = '/api/v1';

const routes = express.Router();

routes.post(`${apiv}/authenticate`, UserController.authenticate);

routes.get(`${apiv}/users`, auth, UserController.index);
routes.post(`${apiv}/users`, auth, UserController.store);
routes.patch(`${apiv}/users/:id`, auth, UserController.edit);
routes.delete(`${apiv}/users/:id`, auth, UserController.remove);

routes.get(`${apiv}/manufacturers`, auth, ManufacturerController.index);
routes.post(`${apiv}/manufacturers`, auth, ManufacturerController.store);
routes.patch(`${apiv}/manufacturers/:id`, auth, ManufacturerController.edit);
routes.delete(`${apiv}/manufacturers/:id`, auth, ManufacturerController.remove);

routes.get(`${apiv}/itemtypes`, auth, ItemTypeController.index);
routes.post(`${apiv}/itemtypes`, auth, ItemTypeController.store);
routes.patch(`${apiv}/itemtypes/:id`, auth, ItemTypeController.edit);
routes.delete(`${apiv}/itemtypes/:id`, auth, ItemTypeController.remove);

routes.get(`${apiv}/items`, auth, ItemController.index);
routes.post(`${apiv}/items`, auth, ItemController.store);
routes.post(`${apiv}/items/load`, auth, ItemController.load);
routes.patch(`${apiv}/items/:id`, auth, ItemController.edit);
routes.delete(`${apiv}/items/:id`, auth, ItemController.remove);

routes.get(`${apiv}/panels`, auth, PanelController.index);
routes.post(`${apiv}/panels`, auth, PanelController.store);
routes.patch(`${apiv}/panels/:id`, auth, PanelController.edit);
routes.delete(`${apiv}/panels/:id`, auth, PanelController.remove);

module.exports = routes;