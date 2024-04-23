/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Alimentos } from '../../models/alimentos';

export interface GetAlimentos$Plain$Params {
}

export function getAlimentos$Plain(http: HttpClient, rootUrl: string, params?: GetAlimentos$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Alimentos>>> {
  const rb = new RequestBuilder(rootUrl, getAlimentos$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Alimentos>>;
    })
  );
}

getAlimentos$Plain.PATH = '/api/Alimentos';
