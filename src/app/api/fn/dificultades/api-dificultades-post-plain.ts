/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Dificultad } from '../../models/dificultad';

export interface ApiDificultadesPost$Plain$Params {
      body?: Dificultad
}

export function apiDificultadesPost$Plain(http: HttpClient, rootUrl: string, params?: ApiDificultadesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Dificultad>> {
  const rb = new RequestBuilder(rootUrl, apiDificultadesPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Dificultad>;
    })
  );
}

apiDificultadesPost$Plain.PATH = '/api/Dificultades';
