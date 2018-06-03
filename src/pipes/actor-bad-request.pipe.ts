import { ArgumentMetadata, BadRequestException, Injectable } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class ActorBadRequestPipe {

  constructor(private readonly _schema){}

  transform(jsonAValidar: any, metadata: ArgumentMetadata) {

    const {error} = Joi.validate(jsonAValidar, this._schema);

    if (error) {
      throw new BadRequestException(
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