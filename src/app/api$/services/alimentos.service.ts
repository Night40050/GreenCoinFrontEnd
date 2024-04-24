/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Alimentos } from '../models/alimentos';
import { apiAlimentosIdDelete$Json } from '../fn/alimentos/api-alimentos-id-delete-json';
import { ApiAlimentosIdDelete$Json$Params } from '../fn/alimentos/api-alimentos-id-delete-json';
import { apiAlimentosIdDelete$Plain } from '../fn/alimentos/api-alimentos-id-delete-plain';
import { ApiAlimentosIdDelete$Plain$Params } from '../fn/alimentos/api-alimentos-id-delete-plain';
import { apiAlimentosIdPut } from '../fn/alimentos/api-alimentos-id-put';
import { ApiAlimentosIdPut$Params } from '../fn/alimentos/api-alimentos-id-put';
import { apiAlimentosPost$Json } from '../fn/alimentos/api-alimentos-post-json';
import { ApiAlimentosPost$Json$Params } from '../fn/alimentos/api-alimentos-post-json';
import { apiAlimentosPost$Plain } from '../fn/alimentos/api-alimentos-post-plain';
import { ApiAlimentosPost$Plain$Params } from '../fn/alimentos/api-alimentos-post-plain';
import { getAlimentos$Json } from '../fn/alimentos/get-alimentos-json';
import { GetAlimentos$Json$Params } from '../fn/alimentos/get-alimentos-json';
import { getAlimentos$Plain } from '../fn/alimentos/get-alimentos-plain';
import { GetAlimentos$Plain$Params } from '../fn/alimentos/get-alimentos-plain';
import { getProducto$Json } from '../fn/alimentos/get-producto-json';
import { GetProducto$Json$Params } from '../fn/alimentos/get-producto-json';
import { getProducto$Plain } from '../fn/alimentos/get-producto-plain';
import { GetProducto$Plain$Params } from '../fn/alimentos/get-producto-plain';

@Injectable({ providedIn: 'root' })
export class AlimentosService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAlimentos()` */
  static readonly GetAlimentosPath = '/api/Alimentos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAlimentos$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlimentos$Plain$Response(params?: GetAlimentos$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Alimentos>>> {
    return getAlimentos$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAlimentos$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlimentos$Plain(params?: GetAlimentos$Plain$Params, context?: HttpContext): Observable<Array<Alimentos>> {
    return this.getAlimentos$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Alimentos>>): Array<Alimentos> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAlimentos$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlimentos$Json$Response(params?: GetAlimentos$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Alimentos>>> {
    return getAlimentos$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAlimentos$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlimentos$Json(params?: GetAlimentos$Json$Params, context?: HttpContext): Observable<Array<Alimentos>> {
    return this.getAlimentos$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Alimentos>>): Array<Alimentos> => r.body)
    );
  }

  /** Path part for operation `apiAlimentosPost()` */
  static readonly ApiAlimentosPostPath = '/api/Alimentos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlimentosPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlimentosPost$Plain$Response(params?: ApiAlimentosPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Alimentos>> {
    return apiAlimentosPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlimentosPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlimentosPost$Plain(params?: ApiAlimentosPost$Plain$Params, context?: HttpContext): Observable<Alimentos> {
    return this.apiAlimentosPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Alimentos>): Alimentos => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlimentosPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlimentosPost$Json$Response(params?: ApiAlimentosPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Alimentos>> {
    return apiAlimentosPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlimentosPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlimentosPost$Json(params?: ApiAlimentosPost$Json$Params, context?: HttpContext): Observable<Alimentos> {
    return this.apiAlimentosPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Alimentos>): Alimentos => r.body)
    );
  }

  /** Path part for operation `getProducto()` */
  static readonly GetProductoPath = '/api/Alimentos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProducto$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProducto$Plain$Response(params: GetProducto$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Alimentos>> {
    return getProducto$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProducto$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProducto$Plain(params: GetProducto$Plain$Params, context?: HttpContext): Observable<Alimentos> {
    return this.getProducto$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Alimentos>): Alimentos => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProducto$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProducto$Json$Response(params: GetProducto$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Alimentos>> {
    return getProducto$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProducto$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProducto$Json(params: GetProducto$Json$Params, context?: HttpContext): Observable<Alimentos> {
    return this.getProducto$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Alimentos>): Alimentos => r.body)
    );
  }

  /** Path part for operation `apiAlimentosIdPut()` */
  static readonly ApiAlimentosIdPutPath = '/api/Alimentos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlimentosIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlimentosIdPut$Response(params: ApiAlimentosIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAlimentosIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlimentosIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlimentosIdPut(params: ApiAlimentosIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiAlimentosIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAlimentosIdDelete()` */
  static readonly ApiAlimentosIdDeletePath = '/api/Alimentos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlimentosIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlimentosIdDelete$Plain$Response(params: ApiAlimentosIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Alimentos>> {
    return apiAlimentosIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlimentosIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlimentosIdDelete$Plain(params: ApiAlimentosIdDelete$Plain$Params, context?: HttpContext): Observable<Alimentos> {
    return this.apiAlimentosIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Alimentos>): Alimentos => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlimentosIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlimentosIdDelete$Json$Response(params: ApiAlimentosIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Alimentos>> {
    return apiAlimentosIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlimentosIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlimentosIdDelete$Json(params: ApiAlimentosIdDelete$Json$Params, context?: HttpContext): Observable<Alimentos> {
    return this.apiAlimentosIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Alimentos>): Alimentos => r.body)
    );
  }

}
