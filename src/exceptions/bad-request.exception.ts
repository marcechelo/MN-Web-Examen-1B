import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
  constructor(private readonly _mensaje) {
    super({
      mensaje: 'Bad request',
      statusCode: HttpStatus.BAD_REQUEST,
      detalle: _mensaje,
    }, HttpStatus.BAD_REQUEST);
  }
}