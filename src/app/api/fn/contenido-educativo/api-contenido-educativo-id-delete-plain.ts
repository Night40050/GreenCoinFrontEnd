/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContenidoEducativo } from '../../models/contenido-educativo';

export interface ApiContenidoEducativoIdDelete$Plain$Params {
  id: number;
}

export function apiContenidoEducativoIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiContenidoEducativoIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
  const rb = new RequestBuilder(rootUrl, apiContenidoEducativoIdDelete$Plain.PATH, 'delete');
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

apiContenidoEducativoIdDelete$Plain.PATH = '/api/ContenidoEducativo/{id}';
