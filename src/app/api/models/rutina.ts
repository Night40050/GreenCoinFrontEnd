/* tslint:disable */
/* eslint-disable */
import { Ejercicio } from '../models/ejercicio';
export interface Rutina {
  descripcion?: string | null;
  ejercicios?: Array<Ejercicio> | null;
  nombre?: string | null;
  rutinaId?: number;
}
