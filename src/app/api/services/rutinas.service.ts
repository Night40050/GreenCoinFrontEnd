/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiRutinasGet$Json } from '../fn/rutinas/api-rutinas-get-json';
import { ApiRutinasGet$Json$Params } from '../fn/rutinas/api-rutinas-get-json';
import { apiRutinasGet$Plain } from '../fn/rutinas/api-rutinas-get-plain';
import { ApiRutinasGet$Plain$Params } from '../fn/rutinas/api-rutinas-get-plain';
import { apiRutinasIdDelete } from '../fn/rutinas/api-rutinas-id-delete';
import { ApiRutinasIdDelete$Params } from '../fn/rutinas/api-rutinas-id-delete';
import { apiRutinasIdGet$Json } from '../fn/rutinas/api-rutinas-id-get-json';
import { ApiRutinasIdGet$Json$Params } from '../fn/rutinas/api-rutinas-id-get-json';
import { apiRutinasIdGet$Plain } from '../fn/rutinas/api-rutinas-id-get-plain';
import { ApiRutinasIdGet$Plain$Params } from '../fn/rutinas/api-rutinas-id-get-plain';
import { apiRutinasIdPut } from '../fn/rutinas/api-rutinas-id-put';
import { ApiRutinasIdPut$Params } from '../fn/rutinas/api-rutinas-id-put';
import { apiRutinasPost$Json } from '../fn/rutinas/api-rutinas-post-json';
import { ApiRutinasPost$Json$Params } from '../fn/rutinas/api-rutinas-post-json';
import { apiRutinasPost$Plain } from '../fn/rutinas/api-rutinas-post-plain';
import { ApiRutinasPost$Plain$Params } from '../fn/rutinas/api-rutinas-post-plain';
import { Rutina } from '../models/rutina';

@Injectable({ providedIn: 'root' })
export class RutinasService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiRutinasGet()` */
  static readonly ApiRutinasGetPath = '/api/Rutinas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRutinasGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasGet$Plain$Response(params?: ApiRutinasGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Rutina>>> {
    return apiRutinasGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRutinasGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasGet$Plain(params?: ApiRutinasGet$Plain$Params, context?: HttpContext): Observable<Array<Rutina>> {
    return this.apiRutinasGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Rutina>>): Array<Rutina> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRutinasGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasGet$Json$Response(params?: ApiRutinasGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Rutina>>> {
    return apiRutinasGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRutinasGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasGet$Json(params?: ApiRutinasGet$Json$Params, context?: HttpContext): Observable<Array<Rutina>> {
    return this.apiRutinasGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Rutina>>): Array<Rutina> => r.body)
    );
  }

  /** Path part for operation `apiRutinasPost()` */
  static readonly ApiRutinasPostPath = '/api/Rutinas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRutinasPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRutinasPost$Plain$Response(params?: ApiRutinasPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Rutina>> {
    return apiRutinasPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRutinasPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRutinasPost$Plain(params?: ApiRutinasPost$Plain$Params, context?: HttpContext): Observable<Rutina> {
    return this.apiRutinasPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Rutina>): Rutina => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRutinasPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRutinasPost$Json$Response(params?: ApiRutinasPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Rutina>> {
    return apiRutinasPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRutinasPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRutinasPost$Json(params?: ApiRutinasPost$Json$Params, context?: HttpContext): Observable<Rutina> {
    return this.apiRutinasPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Rutina>): Rutina => r.body)
    );
  }

  /** Path part for operation `apiRutinasIdGet()` */
  static readonly ApiRutinasIdGetPath = '/api/Rutinas/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRutinasIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasIdGet$Plain$Response(params: ApiRutinasIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Rutina>> {
    return apiRutinasIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRutinasIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasIdGet$Plain(params: ApiRutinasIdGet$Plain$Params, context?: HttpContext): Observable<Rutina> {
    return this.apiRutinasIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Rutina>): Rutina => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRutinasIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasIdGet$Json$Response(params: ApiRutinasIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Rutina>> {
    return apiRutinasIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRutinasIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasIdGet$Json(params: ApiRutinasIdGet$Json$Params, context?: HttpContext): Observable<Rutina> {
    return this.apiRutinasIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Rutina>): Rutina => r.body)
    );
  }

  /** Path part for operation `apiRutinasIdPut()` */
  static readonly ApiRutinasIdPutPath = '/api/Rutinas/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRutinasIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRutinasIdPut$Response(params: ApiRutinasIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRutinasIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRutinasIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRutinasIdPut(params: ApiRutinasIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiRutinasIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRutinasIdDelete()` */
  static readonly ApiRutinasIdDeletePath = '/api/Rutinas/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRutinasIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasIdDelete$Response(params: ApiRutinasIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRutinasIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRutinasIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRutinasIdDelete(params: ApiRutinasIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiRutinasIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
