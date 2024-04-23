/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Alimentos } from '../../models/alimentos';

export interface ApiAlimentosIdDelete$Plain$Params {
  id: number;
}

export function apiAlimentosIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiAlimentosIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Alimentos>> {
  const rb = new RequestBuilder(rootUrl, apiAlimentosIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Alimentos>;
    })
  );
}

apiAlimentosIdDelete$Plain.PATH = '/api/Alimentos/{id}';
