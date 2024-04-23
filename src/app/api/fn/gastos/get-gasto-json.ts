/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gastos } from '../../models/gastos';

export interface GetGasto$Json$Params {
  id: number;
}

export function getGasto$Json(http: HttpClient, rootUrl: string, params: GetGasto$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gastos>> {
  const rb = new RequestBuilder(rootUrl, getGasto$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Gastos>;
    })
  );
}

getGasto$Json.PATH = '/api/Gastos/{id}';
