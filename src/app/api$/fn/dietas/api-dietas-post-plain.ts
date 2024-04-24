/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Dieta } from '../../models/dieta';

export interface ApiDietasPost$Plain$Params {
      body?: Dieta
}

export function apiDietasPost$Plain(http: HttpClient, rootUrl: string, params?: ApiDietasPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Dieta>> {
  const rb = new RequestBuilder(rootUrl, apiDietasPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Dieta>;
    })
  );
}

apiDietasPost$Plain.PATH = '/api/Dietas';
