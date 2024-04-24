/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Rutina } from '../../models/rutina';

export interface ApiRutinasPost$Json$Params {
      body?: Rutina
}

export function apiRutinasPost$Json(http: HttpClient, rootUrl: string, params?: ApiRutinasPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Rutina>> {
  const rb = new RequestBuilder(rootUrl, apiRutinasPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Rutina>;
    })
  );
}

apiRutinasPost$Json.PATH = '/api/Rutinas';
