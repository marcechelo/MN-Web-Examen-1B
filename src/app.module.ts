import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaController } from './pelicula.controller';
import { ActorService } from './actor.service';
import { PeliculaService } from './pelicula.service';
import { ActorController } from './actor.controller';
import { AutorizacionController } from './autorizacion.controller';

@Module({
  imports: [],
  controllers: [AppController, ActorController, PeliculaController, AutorizacionController],
  providers: [AppService, ActorService, PeliculaService],
})
export class AppModule {}
