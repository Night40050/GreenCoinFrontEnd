/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiRecoveryPasswordRecoveryPasswordPost } from '../fn/recovery-password/api-recovery-password-recovery-password-post';
import { ApiRecoveryPasswordRecoveryPasswordPost$Params } from '../fn/recovery-password/api-recovery-password-recovery-password-post';

@Injectable({ providedIn: 'root' })
export class RecoveryPasswordService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiRecoveryPasswordRecoveryPasswordPost()` */
  static readonly ApiRecoveryPasswordRecoveryPasswordPostPath = '/api/Recovery_Password/Recovery-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecoveryPasswordRecoveryPasswordPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRecoveryPasswordRecoveryPasswordPost$Response(params?: ApiRecoveryPasswordRecoveryPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRecoveryPasswordRecoveryPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRecoveryPasswordRecoveryPasswordPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRecoveryPasswordRecoveryPasswordPost(params?: ApiRecoveryPasswordRecoveryPasswordPost$Params, context?: HttpContext): Observable<void> {
    return this.apiRecoveryPasswordRecoveryPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
