/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContenidoEducativo } from '../../models/contenido-educativo';

export interface GetContenidosEducativos$Json$Params {
}

export function getContenidosEducativos$Json(http: HttpClient, rootUrl: string, params?: GetContenidosEducativos$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContenidoEducativo>>> {
  const rb = new RequestBuilder(rootUrl, getContenidosEducativos$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ContenidoEducativo>>;
    })
  );
}

getContenidosEducativos$Json.PATH = '/api/ContenidoEducativo';
