import { Injectable } from '@nestjs/common';

@Injectable()
export class PeliculaService {

  peliculas: Pelicula[]= [];

  crearPelicula(pelicula: Pelicula): Pelicula{
    this.peliculas.push(pelicula);
    return pelicula;
  }

  mostrarPelicula(): Pelicula[]{
    return this.peliculas;
  }
}

export interface Pelicula {
  identificadorPelicula: number;
  nombre: string;
  anioLanzamiento: number;
  rating: number;
  actoresPrincipales: string;
  sinopsis: string;
  actorId: number;
}