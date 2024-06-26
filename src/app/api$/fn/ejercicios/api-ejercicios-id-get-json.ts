/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ejercicio } from '../../models/ejercicio';

export interface ApiEjerciciosIdGet$Json$Params {
  id: number;
}

export function apiEjerciciosIdGet$Json(http: HttpClient, rootUrl: string, params: ApiEjerciciosIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Ejercicio>> {
  const rb = new RequestBuilder(rootUrl, apiEjerciciosIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Ejercicio>;
    })
  );
}

apiEjerciciosIdGet$Json.PATH = '/api/Ejercicios/{id}';
