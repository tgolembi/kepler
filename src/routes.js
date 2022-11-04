const express = require('express');
const ManufacturerController = require('./controllers/ManufacturerController.js');
const ItemController = require('./controllers/ItemController.js');
const PanelController = require('./controllers/PanelController.js');

const apiv = '/api/v1';

const routes = express.Router();

routes.get(`${apiv}/manufacturers`, ManufacturerController.index);
routes.post(`${apiv}/manufacturers`, ManufacturerController.store);
routes.patch(`${apiv}/manufacturers/:id`, ManufacturerController.edit);
routes.delete(`${apiv}/manufacturers/:id`, ManufacturerController.remove);

routes.get(`${apiv}/items`, ItemController.index);
routes.post(`${apiv}/items`, ItemController.store);
routes.patch(`${apiv}/items/:id`, ItemController.edit);
routes.delete(`${apiv}/items/:id`, ItemController.remove);

routes.get(`${apiv}/panels`, PanelController.index);
routes.post(`${apiv}/panels`, PanelController.store);
routes.patch(`${apiv}/panels/:id`, PanelController.edit);
routes.delete(`${apiv}/panels/:id`, PanelController.remove);

module.exports = routes;