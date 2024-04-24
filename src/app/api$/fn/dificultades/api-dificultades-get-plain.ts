/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Dificultad } from '../../models/dificultad';

export interface ApiDificultadesGet$Plain$Params {
}

export function apiDificultadesGet$Plain(http: HttpClient, rootUrl: string, params?: ApiDificultadesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Dificultad>>> {
  const rb = new RequestBuilder(rootUrl, apiDificultadesGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Dificultad>>;
    })
  );
}

apiDificultadesGet$Plain.PATH = '/api/Dificultades';
