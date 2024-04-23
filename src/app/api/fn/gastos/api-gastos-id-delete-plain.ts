/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gastos } from '../../models/gastos';

export interface ApiGastosIdDelete$Plain$Params {
  id: number;
}

export function apiGastosIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiGastosIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gastos>> {
  const rb = new RequestBuilder(rootUrl, apiGastosIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Gastos>;
    })
  );
}

apiGastosIdDelete$Plain.PATH = '/api/Gastos/{id}';
