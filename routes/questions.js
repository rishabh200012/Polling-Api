import express from 'express';
import questionController from '../controller/QuestionsController.js';
import optionsRoutes from './options.js';

const Router = express.Router();
const queController= new questionController();
Router.post('/create', queController.create);
Router.get('/view/:id', queController.showDetails);
Router.delete('/delete/:id', queController.deleteQues);
Router.use('/options', optionsRoutes);

export default Router;
