/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ejercicio } from '../../models/ejercicio';

export interface ApiEjerciciosGet$Json$Params {
}

export function apiEjerciciosGet$Json(http: HttpClient, rootUrl: string, params?: ApiEjerciciosGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ejercicio>>> {
  const rb = new RequestBuilder(rootUrl, apiEjerciciosGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Ejercicio>>;
    })
  );
}

apiEjerciciosGet$Json.PATH = '/api/Ejercicios';
