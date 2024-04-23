/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContenidoEducativo } from '../../models/contenido-educativo';

export interface ApiContenidoEducativoPost$Plain$Params {
      body?: ContenidoEducativo
}

export function apiContenidoEducativoPost$Plain(http: HttpClient, rootUrl: string, params?: ApiContenidoEducativoPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
  const rb = new RequestBuilder(rootUrl, apiContenidoEducativoPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiContenidoEducativoPost$Plain.PATH = '/api/ContenidoEducativo';
