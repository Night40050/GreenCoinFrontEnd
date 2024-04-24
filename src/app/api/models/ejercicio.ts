/* tslint:disable */
/* eslint-disable */
import { Dificultad } from '../models/dificultad';
import { Rutina } from '../models/rutina';
export interface Ejercicio {
  descripcion?: string | null;
  dificultad?: Dificultad;
  dificultadId?: number;
  ejercicioId?: number;
  nombre?: string | null;
  repeticiones?: number;
  rutina?: Rutina;
  rutinaId?: number;
  series?: number;
}
