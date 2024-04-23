/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ingresos } from '../../models/ingresos';

export interface GetIngresos$Plain$Params {
}

export function getIngresos$Plain(http: HttpClient, rootUrl: string, params?: GetIngresos$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ingresos>>> {
  const rb = new RequestBuilder(rootUrl, getIngresos$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Ingresos>>;
    })
  );
}

getIngresos$Plain.PATH = '/api/Ingresos';
