/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Alimentos } from '../../models/alimentos';

export interface ApiAlimentosPost$Json$Params {
      body?: Alimentos
}

export function apiAlimentosPost$Json(http: HttpClient, rootUrl: string, params?: ApiAlimentosPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Alimentos>> {
  const rb = new RequestBuilder(rootUrl, apiAlimentosPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Alimentos>;
    })
  );
}

apiAlimentosPost$Json.PATH = '/api/Alimentos';
