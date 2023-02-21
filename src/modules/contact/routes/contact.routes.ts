import { Router } from 'express';
import ContactController from '@modules/contact/controller/ContactController';
import { celebrate, Joi, Segments } from 'celebrate';

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

export default contactRoutes;
