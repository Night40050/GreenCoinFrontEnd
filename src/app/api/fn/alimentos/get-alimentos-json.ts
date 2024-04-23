/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Alimentos } from '../../models/alimentos';

export interface GetAlimentos$Json$Params {
}

export function getAlimentos$Json(http: HttpClient, rootUrl: string, params?: GetAlimentos$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Alimentos>>> {
  const rb = new RequestBuilder(rootUrl, getAlimentos$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Alimentos>>;
    })
  );
}

getAlimentos$Json.PATH = '/api/Alimentos';
