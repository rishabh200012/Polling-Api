import express from 'express';
import optionsController from '../controller/OptionsController.js';

const Router = express.Router();

const optController=new optionsController();
Router.post('/:id/create', optController.create);
Router.get('/:id/add_vote', optController.add_vote);
Router.delete('/delete/:id', optController.deleteOption);

export default Router;
