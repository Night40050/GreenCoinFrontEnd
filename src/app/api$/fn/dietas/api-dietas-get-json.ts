/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Dieta } from '../../models/dieta';

export interface ApiDietasGet$Json$Params {
}

export function apiDietasGet$Json(http: HttpClient, rootUrl: string, params?: ApiDietasGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Dieta>>> {
  const rb = new RequestBuilder(rootUrl, apiDietasGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Dieta>>;
    })
  );
}

apiDietasGet$Json.PATH = '/api/Dietas';
