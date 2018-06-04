import { Body, Controller, Get, NotFoundException, Post, Put, Req, Res } from '@nestjs/common';
import { ActorBadRequestPipe } from './pipes/actor-bad-request.pipe';
import { PELICULA_SCHEMA } from './pelicula/pelicula.schema';
import { PeliculaService } from './pelicula.service';

@Controller('Pelicula')
export class PeliculaController {

  constructor(private _peliculaService: PeliculaService){}

  @Get()
  listarTodos(@Res() response){
    return response.send(this._peliculaService.mostrarPelicula());
  }

  @Post()
  crearActor(@Body(new ActorBadRequestPipe(PELICULA_SCHEMA)) nuevaPelicula){

    const peliculaCreada = this._peliculaService.crearPelicula(nuevaPelicula);
    return nuevaPelicula;

  }

  @Get(':id')
  obtenerUno(@Req() request, @Res() response){

    const pelicula = this._peliculaService.buscarPelicula(request.params.id);
    if (pelicula == null){
      throw new NotFoundException(
        {
          // erorr: error,
          mensaje: 'No se encontro pelicula',
        },
      );
    } else{
      return response.send(pelicula); }
  }

  @Put(':id')
  editarUno(@Req() request, @Body(new ActorBadRequestPipe(PELICULA_SCHEMA)) peliculaModificado){
    const valor = request.params.id;
    this._peliculaService.remplazarPelicula(valor, peliculaModificado);
  }

}