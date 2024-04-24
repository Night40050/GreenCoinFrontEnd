/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ejercicio } from '../../models/ejercicio';

export interface ApiEjerciciosPost$Json$Params {
      body?: Ejercicio
}

export function apiEjerciciosPost$Json(http: HttpClient, rootUrl: string, params?: ApiEjerciciosPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Ejercicio>> {
  const rb = new RequestBuilder(rootUrl, apiEjerciciosPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiEjerciciosPost$Json.PATH = '/api/Ejercicios';
