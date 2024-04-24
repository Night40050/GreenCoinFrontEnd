/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Dieta } from '../../models/dieta';

export interface ApiDietasIdGet$Plain$Params {
  id: number;
}

export function apiDietasIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiDietasIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Dieta>> {
  const rb = new RequestBuilder(rootUrl, apiDietasIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

apiDietasIdGet$Plain.PATH = '/api/Dietas/{id}';
