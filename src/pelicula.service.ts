import { Injectable } from '@nestjs/common';

@Injectable()
export class PeliculaService {

  peliculas: Pelicula[] = [];

  crearPelicula(pelicula: Pelicula): Pelicula {
    this.peliculas.push(pelicula);
    return pelicula;
  }

  mostrarPelicula(): Pelicula[] {
    return this.peliculas;
  }

  remplazarPelicula(id: number, pelicula: Pelicula){
    this.peliculas[id] = pelicula;
  }

  buscarPelicula(nombre1: string): Pelicula {

    const arreglo = this.peliculas.filter(
      (usuario: Pelicula) => {
        return usuario.nombre === nombre1; // true, false
      },
    );
    if (arreglo == null) {
      return null;
    } else {
      return arreglo[0];
    }
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