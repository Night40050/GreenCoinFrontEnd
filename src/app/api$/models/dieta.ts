/* tslint:disable */
/* eslint-disable */
import { DietaAlimento } from '../models/dieta-alimento';
export interface Dieta {
  descripcion?: string | null;
  dietaAlimentos?: Array<DietaAlimento> | null;
  dietaId?: number;
  nombre?: string | null;
}
