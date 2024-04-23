/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ingresos } from '../../models/ingresos';

export interface ApiIngresosPost$Plain$Params {
      body?: Ingresos
}

export function apiIngresosPost$Plain(http: HttpClient, rootUrl: string, params?: ApiIngresosPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Ingresos>> {
  const rb = new RequestBuilder(rootUrl, apiIngresosPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiIngresosPost$Plain.PATH = '/api/Ingresos';
