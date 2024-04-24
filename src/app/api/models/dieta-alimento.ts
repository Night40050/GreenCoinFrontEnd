/* tslint:disable */
/* eslint-disable */
import { Alimentos } from '../models/alimentos';
import { Dieta } from '../models/dieta';
export interface DietaAlimento {
  alimento?: Alimentos;
  alimentoId?: number;
  dieta?: Dieta;
  dietaId?: number;
}
