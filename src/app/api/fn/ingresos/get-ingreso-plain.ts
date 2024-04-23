/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ingresos } from '../../models/ingresos';

export interface GetIngreso$Plain$Params {
  id: number;
}

export function getIngreso$Plain(http: HttpClient, rootUrl: string, params: GetIngreso$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Ingresos>> {
  const rb = new RequestBuilder(rootUrl, getIngreso$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Ingresos>;
    })
  );
}

getIngreso$Plain.PATH = '/api/Ingresos/{id}';
