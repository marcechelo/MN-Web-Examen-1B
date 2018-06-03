import * as Joi from 'joi';

export const ACTOR_SCHEMA = Joi
  .object()
  .keys({
    id: Joi
      .number()
      .integer()
      .greater(0)
      .required(),
    nombre: Joi
      .string()
      .min(3)
      .max(30)
      .required(),
    apellido: Joi
      .string()
      .min(1)
      .max(30),
    fechaNacimiento: Joi
      .string(),
    numeroPeliculas: Joi
      .number()
      .integer()
      .greater(0),
    retirado: Joi
      .boolean(),
  });