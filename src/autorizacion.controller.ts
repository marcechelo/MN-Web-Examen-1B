import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('Autorizacion')
export class AutorizacionController {

  @Post('iniciarSesion')
  iniciarSesion(@Req() request, @Body() bodyParams, @Res() response) {

    const parametro = {
      nombreCookie: 'token',
      valorCookie: bodyParams.actor,
    };

    if ((bodyParams.actor.match('adrianeguez') != null) && (bodyParams.password.match('12345678910') != null)) {
      response.cookie(parametro.nombreCookie, parametro.valorCookie);
      return response.send({ mensaje: 'ok'});
    } else {
      return response.send('error');
    }
  }

  @Post('cerrarSesion')

  cerrarSesion(@Req() request, @Res() response){

    const nombreCookie = 'token';
    const existeCookie = request.cookies[nombreCookie];
    if (existeCookie){

      request.cookies[nombreCookie] = response.cookie('token', 'undefined');
      return response.send({mensaje: 'Usted salio del Sistema'});
    } else{
      return response.send('erros');
    }
  }

  @Get('cookie/:nombre')
  leerCookie(
    @Req() request,
    @Res() response,
  ) {
    const nombreCookie = request.params.nombre;
    const existeCookie = request.cookies[nombreCookie];
    if (existeCookie) {
      return response.send({
        valor: existeCookie,
      });
    } else {
      return response
        .status(404)
        .send({
          mensaje: 'No encontramos cookie',
        });
    }

    // request.cookies.adrian;
    // request.cookies["adrian"];
  }

}