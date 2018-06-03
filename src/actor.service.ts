import { Injectable } from '@nestjs/common';

@Injectable()
export class ActorService {

  actores: Actor[] = [];

  crearActor(actor: Actor): Actor {
    this.actores.push(actor);
    return actor;
  }

  mostrarActor(): Actor[] {
    return this.actores;
  }

  remplazarActor(id: number, actor: Actor){
    this.actores[id] = actor;
  }

  buscarActor(nombre1: string): Actor {

    const arreglo = this.actores.filter(
      (usuario: Actor) => {
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

export interface Actor {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  numeroPeliculas: number;
  retirado: boolean;
}