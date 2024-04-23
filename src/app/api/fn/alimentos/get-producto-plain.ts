/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Alimentos } from '../../models/alimentos';

export interface GetProducto$Plain$Params {
  id: number;
}

export function getProducto$Plain(http: HttpClient, rootUrl: string, params: GetProducto$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Alimentos>> {
  const rb = new RequestBuilder(rootUrl, getProducto$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Alimentos>;
    })
  );
}

getProducto$Plain.PATH = '/api/Alimentos/{id}';
