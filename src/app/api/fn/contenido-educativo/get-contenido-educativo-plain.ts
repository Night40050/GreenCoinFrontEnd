/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContenidoEducativo } from '../../models/contenido-educativo';

export interface GetContenidoEducativo$Plain$Params {
  id: number;
}

export function getContenidoEducativo$Plain(http: HttpClient, rootUrl: string, params: GetContenidoEducativo$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
  const rb = new RequestBuilder(rootUrl, getContenidoEducativo$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContenidoEducativo>;
    })
  );
}

getContenidoEducativo$Plain.PATH = '/api/ContenidoEducativo/{id}';
