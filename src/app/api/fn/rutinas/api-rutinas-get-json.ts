/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Rutina } from '../../models/rutina';

export interface ApiRutinasGet$Json$Params {
}

export function apiRutinasGet$Json(http: HttpClient, rootUrl: string, params?: ApiRutinasGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Rutina>>> {
  const rb = new RequestBuilder(rootUrl, apiRutinasGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Rutina>>;
    })
  );
}

apiRutinasGet$Json.PATH = '/api/Rutinas';
