import { ArgumentMetadata, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class ActorNotFoundPipe {

  constructor(private readonly _schema){}

  transform(jsonAValidar: any, metadata: ArgumentMetadata) {

    const {error} = Joi.validate(jsonAValidar, this._schema);

    if (error) {
      throw new NotFoundException(
        {
          erorr: error,
          mensaje: 'Json no valido',
        },
      );
    } else {
      return jsonAValidar;
    }
  }

}