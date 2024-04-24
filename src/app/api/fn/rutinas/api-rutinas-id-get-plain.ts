/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Rutina } from '../../models/rutina';

export interface ApiRutinasIdGet$Plain$Params {
  id: number;
}

export function apiRutinasIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiRutinasIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Rutina>> {
  const rb = new RequestBuilder(rootUrl, apiRutinasIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

apiRutinasIdGet$Plain.PATH = '/api/Rutinas/{id}';
