import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ContactController from '@controller/ContactController';

const contactRoutes = Router();
const controller = new ContactController();

contactRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nameContact: Joi.string().required(),
      dateBirthContact: Joi.date().max('now'),
      nicknameContact: Joi.string(),
    },
  }),
  controller.createContact,
);

contactRoutes.get(
  '/:pkContact',
  celebrate({
    [Segments.PARAMS]: { pkContact: Joi.number().required() },
  }),
  controller.findContact,
);

export default contactRoutes;
