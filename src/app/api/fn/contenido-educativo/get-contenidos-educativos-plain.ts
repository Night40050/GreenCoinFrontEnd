/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContenidoEducativo } from '../../models/contenido-educativo';

export interface GetContenidosEducativos$Plain$Params {
}

export function getContenidosEducativos$Plain(http: HttpClient, rootUrl: string, params?: GetContenidosEducativos$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContenidoEducativo>>> {
  const rb = new RequestBuilder(rootUrl, getContenidosEducativos$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ContenidoEducativo>>;
    })
  );
}

getContenidosEducativos$Plain.PATH = '/api/ContenidoEducativo';
