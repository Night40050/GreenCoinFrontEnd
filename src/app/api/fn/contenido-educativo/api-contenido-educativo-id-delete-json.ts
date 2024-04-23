/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContenidoEducativo } from '../../models/contenido-educativo';

export interface ApiContenidoEducativoIdDelete$Json$Params {
  id: number;
}

export function apiContenidoEducativoIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiContenidoEducativoIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
  const rb = new RequestBuilder(rootUrl, apiContenidoEducativoIdDelete$Json.PATH, 'delete');
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

apiContenidoEducativoIdDelete$Json.PATH = '/api/ContenidoEducativo/{id}';
