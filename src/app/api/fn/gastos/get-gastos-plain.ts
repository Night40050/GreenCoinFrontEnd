/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gastos } from '../../models/gastos';

export interface GetGastos$Plain$Params {
}

export function getGastos$Plain(http: HttpClient, rootUrl: string, params?: GetGastos$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Gastos>>> {
  const rb = new RequestBuilder(rootUrl, getGastos$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Gastos>>;
    })
  );
}

getGastos$Plain.PATH = '/api/Gastos';
