import { BadRequestException, Body, Controller, Get, NotFoundException, Post, Put, Req, Res } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorBadRequestPipe } from './pipes/actor-bad-request.pipe';
import { ACTOR_SCHEMA } from './actor/actor.schema';

@Controller('Actor')
export class ActorController {

  constructor(private _actorService: ActorService){}

  @Get()
  listarTodos(@Res() response){
    return response.send(this._actorService.mostrarActor());
  }

  @Post()
  crearActor(@Body(new ActorBadRequestPipe(ACTOR_SCHEMA)) nuevoActor){

    const usuarioCreado = this._actorService.crearActor(nuevoActor);
    return nuevoActor;

  }

  @Get(':id')
    obtenerUno(@Req() request, @Res() response){

    const actor = this._actorService.buscarActor(request.params.id);
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
  editarUno(@Req() request, @Body(new ActorBadRequestPipe(ACTOR_SCHEMA)) actorModificado){
    const valor = request.params.id;
    this._actorService.remplazarActor(valor, actorModificado);
  }


}