/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDificultadesGet$Json } from '../fn/dificultades/api-dificultades-get-json';
import { ApiDificultadesGet$Json$Params } from '../fn/dificultades/api-dificultades-get-json';
import { apiDificultadesGet$Plain } from '../fn/dificultades/api-dificultades-get-plain';
import { ApiDificultadesGet$Plain$Params } from '../fn/dificultades/api-dificultades-get-plain';
import { apiDificultadesIdDelete } from '../fn/dificultades/api-dificultades-id-delete';
import { ApiDificultadesIdDelete$Params } from '../fn/dificultades/api-dificultades-id-delete';
import { apiDificultadesIdGet$Json } from '../fn/dificultades/api-dificultades-id-get-json';
import { ApiDificultadesIdGet$Json$Params } from '../fn/dificultades/api-dificultades-id-get-json';
import { apiDificultadesIdGet$Plain } from '../fn/dificultades/api-dificultades-id-get-plain';
import { ApiDificultadesIdGet$Plain$Params } from '../fn/dificultades/api-dificultades-id-get-plain';
import { apiDificultadesIdPut } from '../fn/dificultades/api-dificultades-id-put';
import { ApiDificultadesIdPut$Params } from '../fn/dificultades/api-dificultades-id-put';
import { apiDificultadesPost$Json } from '../fn/dificultades/api-dificultades-post-json';
import { ApiDificultadesPost$Json$Params } from '../fn/dificultades/api-dificultades-post-json';
import { apiDificultadesPost$Plain } from '../fn/dificultades/api-dificultades-post-plain';
import { ApiDificultadesPost$Plain$Params } from '../fn/dificultades/api-dificultades-post-plain';
import { Dificultad } from '../models/dificultad';

@Injectable({ providedIn: 'root' })
export class DificultadesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDificultadesGet()` */
  static readonly ApiDificultadesGetPath = '/api/Dificultades';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDificultadesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesGet$Plain$Response(params?: ApiDificultadesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Dificultad>>> {
    return apiDificultadesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDificultadesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesGet$Plain(params?: ApiDificultadesGet$Plain$Params, context?: HttpContext): Observable<Array<Dificultad>> {
    return this.apiDificultadesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Dificultad>>): Array<Dificultad> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDificultadesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesGet$Json$Response(params?: ApiDificultadesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Dificultad>>> {
    return apiDificultadesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDificultadesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesGet$Json(params?: ApiDificultadesGet$Json$Params, context?: HttpContext): Observable<Array<Dificultad>> {
    return this.apiDificultadesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Dificultad>>): Array<Dificultad> => r.body)
    );
  }

  /** Path part for operation `apiDificultadesPost()` */
  static readonly ApiDificultadesPostPath = '/api/Dificultades';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDificultadesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDificultadesPost$Plain$Response(params?: ApiDificultadesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Dificultad>> {
    return apiDificultadesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDificultadesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDificultadesPost$Plain(params?: ApiDificultadesPost$Plain$Params, context?: HttpContext): Observable<Dificultad> {
    return this.apiDificultadesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Dificultad>): Dificultad => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDificultadesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDificultadesPost$Json$Response(params?: ApiDificultadesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Dificultad>> {
    return apiDificultadesPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDificultadesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDificultadesPost$Json(params?: ApiDificultadesPost$Json$Params, context?: HttpContext): Observable<Dificultad> {
    return this.apiDificultadesPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Dificultad>): Dificultad => r.body)
    );
  }

  /** Path part for operation `apiDificultadesIdGet()` */
  static readonly ApiDificultadesIdGetPath = '/api/Dificultades/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDificultadesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesIdGet$Plain$Response(params: ApiDificultadesIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Dificultad>> {
    return apiDificultadesIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDificultadesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesIdGet$Plain(params: ApiDificultadesIdGet$Plain$Params, context?: HttpContext): Observable<Dificultad> {
    return this.apiDificultadesIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Dificultad>): Dificultad => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDificultadesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesIdGet$Json$Response(params: ApiDificultadesIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Dificultad>> {
    return apiDificultadesIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDificultadesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesIdGet$Json(params: ApiDificultadesIdGet$Json$Params, context?: HttpContext): Observable<Dificultad> {
    return this.apiDificultadesIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Dificultad>): Dificultad => r.body)
    );
  }

  /** Path part for operation `apiDificultadesIdPut()` */
  static readonly ApiDificultadesIdPutPath = '/api/Dificultades/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDificultadesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDificultadesIdPut$Response(params: ApiDificultadesIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDificultadesIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDificultadesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDificultadesIdPut(params: ApiDificultadesIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiDificultadesIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiDificultadesIdDelete()` */
  static readonly ApiDificultadesIdDeletePath = '/api/Dificultades/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDificultadesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesIdDelete$Response(params: ApiDificultadesIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDificultadesIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDificultadesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDificultadesIdDelete(params: ApiDificultadesIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiDificultadesIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
