/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Rutina } from '../../models/rutina';

export interface ApiRutinasPost$Plain$Params {
      body?: Rutina
}

export function apiRutinasPost$Plain(http: HttpClient, rootUrl: string, params?: ApiRutinasPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Rutina>> {
  const rb = new RequestBuilder(rootUrl, apiRutinasPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Rutina>;
    })
  );
}

apiRutinasPost$Plain.PATH = '/api/Rutinas';
