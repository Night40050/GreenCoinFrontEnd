/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gastos } from '../../models/gastos';

export interface ApiGastosPost$Json$Params {
      body?: Gastos
}

export function apiGastosPost$Json(http: HttpClient, rootUrl: string, params?: ApiGastosPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gastos>> {
  const rb = new RequestBuilder(rootUrl, apiGastosPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiGastosPost$Json.PATH = '/api/Gastos';
