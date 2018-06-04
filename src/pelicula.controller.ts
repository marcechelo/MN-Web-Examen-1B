import { Body, Controller, Get, NotFoundException, Post, Put, Req, Res } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorBadRequestPipe } from './pipes/actor-bad-request.pipe';
import { ACTOR_SCHEMA } from './actor/actor.schema';
import { PELICULA_SCHEMA } from './pelicula/pelicula.schema';

@Controller('Pelicula')
export class PeliculaController {

  constructor(private _peliculaService: ActorService){}

  @Get()
  listarTodos(@Res() response){
    return response.send(this._peliculaService.mostrarActor());
  }

  @Post()
  crearActor(@Body(new ActorBadRequestPipe(PELICULA_SCHEMA)) nuevaPelicula){

    const peliculaCreada = this._peliculaService.crearActor(nuevaPelicula);
    return nuevaPelicula;

  }

  @Get(':id')
  obtenerUno(@Req() request, @Res() response){

    const actor = this._peliculaService.buscarActor(request.params.id);
    if (actor == null){
      throw new NotFoundException(
        {
          // erorr: error,
          mensaje: 'No se encontro actor',
        },
      );
    } else{
      return response.send(actor); }
  }

  @Put(':id')
  editarUno(@Req() request, @Body(new ActorBadRequestPipe(PELICULA_SCHEMA)) peliculaModificado){
    const valor = request.params.id;
    this._peliculaService.remplazarActor(valor, peliculaModificado);
  }

}