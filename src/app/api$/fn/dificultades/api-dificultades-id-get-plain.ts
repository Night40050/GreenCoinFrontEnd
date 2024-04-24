/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Dificultad } from '../../models/dificultad';

export interface ApiDificultadesIdGet$Plain$Params {
  id: number;
}

export function apiDificultadesIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiDificultadesIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Dificultad>> {
  const rb = new RequestBuilder(rootUrl, apiDificultadesIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

apiDificultadesIdGet$Plain.PATH = '/api/Dificultades/{id}';
