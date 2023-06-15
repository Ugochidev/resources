import { celebrate, Joi, Segments } from "celebrate";

export default celebrate({
  [Segments.BODY]: {
    phone_number: Joi.string().required(),
    password: Joi.string().required(),
  },
});
