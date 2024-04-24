/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ejercicio } from '../../models/ejercicio';

export interface ApiEjerciciosIdGet$Plain$Params {
  id: number;
}

export function apiEjerciciosIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiEjerciciosIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Ejercicio>> {
  const rb = new RequestBuilder(rootUrl, apiEjerciciosIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Ejercicio>;
    })
  );
}

apiEjerciciosIdGet$Plain.PATH = '/api/Ejercicios/{id}';
