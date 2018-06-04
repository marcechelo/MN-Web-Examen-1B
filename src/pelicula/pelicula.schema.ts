import * as Joi from 'joi';

export const PELICULA_SCHEMA = Joi
  .object()
  .keys({
    identificadorPelicula: Joi
      .number()
      .integer()
      .greater(0)
      .required(),
    nombre: Joi
      .string()
      .min(3)
      .max(30)
      .required(),
    anioLanzamiento: Joi
      .number()
      .integer()
      .greater(0),
    rating: Joi
      .number()
      .integer()
      .greater(0),
    actoresPrincipales: Joi
      .string()
      .max(100)
      .required(),
    sinopsis: Joi
      .string()
      .max(100)
      .required(),
    actorId: Joi
      .number()
      .integer()
      .greater(0),
  });