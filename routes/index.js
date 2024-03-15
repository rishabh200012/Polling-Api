import express from 'express';
import questionRoutes from './questions.js';
import optionsRoutes from './options.js';

const Router = express.Router();

Router.use('/question', questionRoutes);
Router.use('/options', optionsRoutes);

export default Router;
