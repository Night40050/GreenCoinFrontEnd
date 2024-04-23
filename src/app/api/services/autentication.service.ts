/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAutenticationValuePost } from '../fn/autentication/api-autentication-value-post';
import { ApiAutenticationValuePost$Params } from '../fn/autentication/api-autentication-value-post';

@Injectable({ providedIn: 'root' })
export class AutenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAutenticationValuePost()` */
  static readonly ApiAutenticationValuePostPath = '/api/Autentication/value';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAutenticationValuePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAutenticationValuePost$Response(params?: ApiAutenticationValuePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAutenticationValuePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAutenticationValuePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAutenticationValuePost(params?: ApiAutenticationValuePost$Params, context?: HttpContext): Observable<void> {
    return this.apiAutenticationValuePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
