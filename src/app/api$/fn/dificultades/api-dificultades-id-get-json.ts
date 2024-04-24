/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Dificultad } from '../../models/dificultad';

export interface ApiDificultadesIdGet$Json$Params {
  id: number;
}

export function apiDificultadesIdGet$Json(http: HttpClient, rootUrl: string, params: ApiDificultadesIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Dificultad>> {
  const rb = new RequestBuilder(rootUrl, apiDificultadesIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Dificultad>;
    })
  );
}

apiDificultadesIdGet$Json.PATH = '/api/Dificultades/{id}';
