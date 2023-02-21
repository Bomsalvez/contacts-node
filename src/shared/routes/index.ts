import { Router } from 'express';
import contactRoutes from '@modules/contact/routes/contact.routes';

const routes = Router();
routes.use('/contact', contactRoutes);

export default routes;
