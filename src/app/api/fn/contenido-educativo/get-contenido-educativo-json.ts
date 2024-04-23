/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContenidoEducativo } from '../../models/contenido-educativo';

export interface GetContenidoEducativo$Json$Params {
  id: number;
}

export function getContenidoEducativo$Json(http: HttpClient, rootUrl: string, params: GetContenidoEducativo$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
  const rb = new RequestBuilder(rootUrl, getContenidoEducativo$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContenidoEducativo>;
    })
  );
}

getContenidoEducativo$Json.PATH = '/api/ContenidoEducativo/{id}';
