/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDietasGet$Json } from '../fn/dietas/api-dietas-get-json';
import { ApiDietasGet$Json$Params } from '../fn/dietas/api-dietas-get-json';
import { apiDietasGet$Plain } from '../fn/dietas/api-dietas-get-plain';
import { ApiDietasGet$Plain$Params } from '../fn/dietas/api-dietas-get-plain';
import { apiDietasIdDelete } from '../fn/dietas/api-dietas-id-delete';
import { ApiDietasIdDelete$Params } from '../fn/dietas/api-dietas-id-delete';
import { apiDietasIdGet$Json } from '../fn/dietas/api-dietas-id-get-json';
import { ApiDietasIdGet$Json$Params } from '../fn/dietas/api-dietas-id-get-json';
import { apiDietasIdGet$Plain } from '../fn/dietas/api-dietas-id-get-plain';
import { ApiDietasIdGet$Plain$Params } from '../fn/dietas/api-dietas-id-get-plain';
import { apiDietasIdPut } from '../fn/dietas/api-dietas-id-put';
import { ApiDietasIdPut$Params } from '../fn/dietas/api-dietas-id-put';
import { apiDietasPost$Json } from '../fn/dietas/api-dietas-post-json';
import { ApiDietasPost$Json$Params } from '../fn/dietas/api-dietas-post-json';
import { apiDietasPost$Plain } from '../fn/dietas/api-dietas-post-plain';
import { ApiDietasPost$Plain$Params } from '../fn/dietas/api-dietas-post-plain';
import { Dieta } from '../models/dieta';

@Injectable({ providedIn: 'root' })
export class DietasService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDietasGet()` */
  static readonly ApiDietasGetPath = '/api/Dietas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietasGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasGet$Plain$Response(params?: ApiDietasGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Dieta>>> {
    return apiDietasGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietasGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasGet$Plain(params?: ApiDietasGet$Plain$Params, context?: HttpContext): Observable<Array<Dieta>> {
    return this.apiDietasGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Dieta>>): Array<Dieta> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietasGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasGet$Json$Response(params?: ApiDietasGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Dieta>>> {
    return apiDietasGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietasGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasGet$Json(params?: ApiDietasGet$Json$Params, context?: HttpContext): Observable<Array<Dieta>> {
    return this.apiDietasGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Dieta>>): Array<Dieta> => r.body)
    );
  }

  /** Path part for operation `apiDietasPost()` */
  static readonly ApiDietasPostPath = '/api/Dietas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietasPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDietasPost$Plain$Response(params?: ApiDietasPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Dieta>> {
    return apiDietasPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietasPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDietasPost$Plain(params?: ApiDietasPost$Plain$Params, context?: HttpContext): Observable<Dieta> {
    return this.apiDietasPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Dieta>): Dieta => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietasPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDietasPost$Json$Response(params?: ApiDietasPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Dieta>> {
    return apiDietasPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietasPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDietasPost$Json(params?: ApiDietasPost$Json$Params, context?: HttpContext): Observable<Dieta> {
    return this.apiDietasPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Dieta>): Dieta => r.body)
    );
  }

  /** Path part for operation `apiDietasIdGet()` */
  static readonly ApiDietasIdGetPath = '/api/Dietas/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietasIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasIdGet$Plain$Response(params: ApiDietasIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Dieta>> {
    return apiDietasIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietasIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasIdGet$Plain(params: ApiDietasIdGet$Plain$Params, context?: HttpContext): Observable<Dieta> {
    return this.apiDietasIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Dieta>): Dieta => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietasIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasIdGet$Json$Response(params: ApiDietasIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Dieta>> {
    return apiDietasIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietasIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasIdGet$Json(params: ApiDietasIdGet$Json$Params, context?: HttpContext): Observable<Dieta> {
    return this.apiDietasIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Dieta>): Dieta => r.body)
    );
  }

  /** Path part for operation `apiDietasIdPut()` */
  static readonly ApiDietasIdPutPath = '/api/Dietas/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietasIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDietasIdPut$Response(params: ApiDietasIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDietasIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietasIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDietasIdPut(params: ApiDietasIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiDietasIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiDietasIdDelete()` */
  static readonly ApiDietasIdDeletePath = '/api/Dietas/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietasIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasIdDelete$Response(params: ApiDietasIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDietasIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietasIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietasIdDelete(params: ApiDietasIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiDietasIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
