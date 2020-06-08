import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/pointsControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsControllers = new PointsController();
const itemsControllers = new ItemsController();

routes.get('/items', itemsControllers.index);

routes.post('/points', 
upload.single('image'), 
celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required()
    })
}),
pointsControllers.create);
routes.get('/points', pointsControllers.index);
routes.get('/points/:id', pointsControllers.show);

export default routes;