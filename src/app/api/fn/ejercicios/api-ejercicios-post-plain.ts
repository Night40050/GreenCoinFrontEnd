/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ejercicio } from '../../models/ejercicio';

export interface ApiEjerciciosPost$Plain$Params {
      body?: Ejercicio
}

export function apiEjerciciosPost$Plain(http: HttpClient, rootUrl: string, params?: ApiEjerciciosPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Ejercicio>> {
  const rb = new RequestBuilder(rootUrl, apiEjerciciosPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiEjerciciosPost$Plain.PATH = '/api/Ejercicios';
