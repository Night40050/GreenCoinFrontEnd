/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiGastosIdDelete$Json } from '../fn/gastos/api-gastos-id-delete-json';
import { ApiGastosIdDelete$Json$Params } from '../fn/gastos/api-gastos-id-delete-json';
import { apiGastosIdDelete$Plain } from '../fn/gastos/api-gastos-id-delete-plain';
import { ApiGastosIdDelete$Plain$Params } from '../fn/gastos/api-gastos-id-delete-plain';
import { apiGastosIdPut } from '../fn/gastos/api-gastos-id-put';
import { ApiGastosIdPut$Params } from '../fn/gastos/api-gastos-id-put';
import { apiGastosPost$Json } from '../fn/gastos/api-gastos-post-json';
import { ApiGastosPost$Json$Params } from '../fn/gastos/api-gastos-post-json';
import { apiGastosPost$Plain } from '../fn/gastos/api-gastos-post-plain';
import { ApiGastosPost$Plain$Params } from '../fn/gastos/api-gastos-post-plain';
import { Gastos } from '../models/gastos';
import { getGasto$Json } from '../fn/gastos/get-gasto-json';
import { GetGasto$Json$Params } from '../fn/gastos/get-gasto-json';
import { getGasto$Plain } from '../fn/gastos/get-gasto-plain';
import { GetGasto$Plain$Params } from '../fn/gastos/get-gasto-plain';
import { getGastos$Json } from '../fn/gastos/get-gastos-json';
import { GetGastos$Json$Params } from '../fn/gastos/get-gastos-json';
import { getGastos$Plain } from '../fn/gastos/get-gastos-plain';
import { GetGastos$Plain$Params } from '../fn/gastos/get-gastos-plain';

@Injectable({ providedIn: 'root' })
export class GastosService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getGastos()` */
  static readonly GetGastosPath = '/api/Gastos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGastos$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGastos$Plain$Response(params?: GetGastos$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Gastos>>> {
    return getGastos$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGastos$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGastos$Plain(params?: GetGastos$Plain$Params, context?: HttpContext): Observable<Array<Gastos>> {
    return this.getGastos$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Gastos>>): Array<Gastos> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGastos$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGastos$Json$Response(params?: GetGastos$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Gastos>>> {
    return getGastos$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGastos$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGastos$Json(params?: GetGastos$Json$Params, context?: HttpContext): Observable<Array<Gastos>> {
    return this.getGastos$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Gastos>>): Array<Gastos> => r.body)
    );
  }

  /** Path part for operation `apiGastosPost()` */
  static readonly ApiGastosPostPath = '/api/Gastos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGastosPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGastosPost$Plain$Response(params?: ApiGastosPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gastos>> {
    return apiGastosPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGastosPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGastosPost$Plain(params?: ApiGastosPost$Plain$Params, context?: HttpContext): Observable<Gastos> {
    return this.apiGastosPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gastos>): Gastos => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGastosPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGastosPost$Json$Response(params?: ApiGastosPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gastos>> {
    return apiGastosPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGastosPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGastosPost$Json(params?: ApiGastosPost$Json$Params, context?: HttpContext): Observable<Gastos> {
    return this.apiGastosPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gastos>): Gastos => r.body)
    );
  }

  /** Path part for operation `getGasto()` */
  static readonly GetGastoPath = '/api/Gastos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGasto$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGasto$Plain$Response(params: GetGasto$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gastos>> {
    return getGasto$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGasto$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGasto$Plain(params: GetGasto$Plain$Params, context?: HttpContext): Observable<Gastos> {
    return this.getGasto$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gastos>): Gastos => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGasto$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGasto$Json$Response(params: GetGasto$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gastos>> {
    return getGasto$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGasto$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGasto$Json(params: GetGasto$Json$Params, context?: HttpContext): Observable<Gastos> {
    return this.getGasto$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gastos>): Gastos => r.body)
    );
  }

  /** Path part for operation `apiGastosIdPut()` */
  static readonly ApiGastosIdPutPath = '/api/Gastos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGastosIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGastosIdPut$Response(params: ApiGastosIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiGastosIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGastosIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGastosIdPut(params: ApiGastosIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiGastosIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiGastosIdDelete()` */
  static readonly ApiGastosIdDeletePath = '/api/Gastos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGastosIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGastosIdDelete$Plain$Response(params: ApiGastosIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gastos>> {
    return apiGastosIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGastosIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGastosIdDelete$Plain(params: ApiGastosIdDelete$Plain$Params, context?: HttpContext): Observable<Gastos> {
    return this.apiGastosIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gastos>): Gastos => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGastosIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGastosIdDelete$Json$Response(params: ApiGastosIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gastos>> {
    return apiGastosIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGastosIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGastosIdDelete$Json(params: ApiGastosIdDelete$Json$Params, context?: HttpContext): Observable<Gastos> {
    return this.apiGastosIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gastos>): Gastos => r.body)
    );
  }

}
