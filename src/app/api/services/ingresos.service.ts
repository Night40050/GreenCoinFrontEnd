/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiIngresosIdDelete$Json } from '../fn/ingresos/api-ingresos-id-delete-json';
import { ApiIngresosIdDelete$Json$Params } from '../fn/ingresos/api-ingresos-id-delete-json';
import { apiIngresosIdDelete$Plain } from '../fn/ingresos/api-ingresos-id-delete-plain';
import { ApiIngresosIdDelete$Plain$Params } from '../fn/ingresos/api-ingresos-id-delete-plain';
import { apiIngresosIdPut } from '../fn/ingresos/api-ingresos-id-put';
import { ApiIngresosIdPut$Params } from '../fn/ingresos/api-ingresos-id-put';
import { apiIngresosPost$Json } from '../fn/ingresos/api-ingresos-post-json';
import { ApiIngresosPost$Json$Params } from '../fn/ingresos/api-ingresos-post-json';
import { apiIngresosPost$Plain } from '../fn/ingresos/api-ingresos-post-plain';
import { ApiIngresosPost$Plain$Params } from '../fn/ingresos/api-ingresos-post-plain';
import { getIngreso$Json } from '../fn/ingresos/get-ingreso-json';
import { GetIngreso$Json$Params } from '../fn/ingresos/get-ingreso-json';
import { getIngreso$Plain } from '../fn/ingresos/get-ingreso-plain';
import { GetIngreso$Plain$Params } from '../fn/ingresos/get-ingreso-plain';
import { getIngresos$Json } from '../fn/ingresos/get-ingresos-json';
import { GetIngresos$Json$Params } from '../fn/ingresos/get-ingresos-json';
import { getIngresos$Plain } from '../fn/ingresos/get-ingresos-plain';
import { GetIngresos$Plain$Params } from '../fn/ingresos/get-ingresos-plain';
import { Ingresos } from '../models/ingresos';

@Injectable({ providedIn: 'root' })
export class IngresosService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getIngresos()` */
  static readonly GetIngresosPath = '/api/Ingresos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIngresos$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIngresos$Plain$Response(params?: GetIngresos$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ingresos>>> {
    return getIngresos$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getIngresos$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIngresos$Plain(params?: GetIngresos$Plain$Params, context?: HttpContext): Observable<Array<Ingresos>> {
    return this.getIngresos$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Ingresos>>): Array<Ingresos> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIngresos$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIngresos$Json$Response(params?: GetIngresos$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ingresos>>> {
    return getIngresos$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getIngresos$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIngresos$Json(params?: GetIngresos$Json$Params, context?: HttpContext): Observable<Array<Ingresos>> {
    return this.getIngresos$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Ingresos>>): Array<Ingresos> => r.body)
    );
  }

  /** Path part for operation `apiIngresosPost()` */
  static readonly ApiIngresosPostPath = '/api/Ingresos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIngresosPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIngresosPost$Plain$Response(params?: ApiIngresosPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Ingresos>> {
    return apiIngresosPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIngresosPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIngresosPost$Plain(params?: ApiIngresosPost$Plain$Params, context?: HttpContext): Observable<Ingresos> {
    return this.apiIngresosPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ingresos>): Ingresos => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIngresosPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIngresosPost$Json$Response(params?: ApiIngresosPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Ingresos>> {
    return apiIngresosPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIngresosPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIngresosPost$Json(params?: ApiIngresosPost$Json$Params, context?: HttpContext): Observable<Ingresos> {
    return this.apiIngresosPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ingresos>): Ingresos => r.body)
    );
  }

  /** Path part for operation `getIngreso()` */
  static readonly GetIngresoPath = '/api/Ingresos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIngreso$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIngreso$Plain$Response(params: GetIngreso$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Ingresos>> {
    return getIngreso$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getIngreso$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIngreso$Plain(params: GetIngreso$Plain$Params, context?: HttpContext): Observable<Ingresos> {
    return this.getIngreso$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ingresos>): Ingresos => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIngreso$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIngreso$Json$Response(params: GetIngreso$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Ingresos>> {
    return getIngreso$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getIngreso$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIngreso$Json(params: GetIngreso$Json$Params, context?: HttpContext): Observable<Ingresos> {
    return this.getIngreso$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ingresos>): Ingresos => r.body)
    );
  }

  /** Path part for operation `apiIngresosIdPut()` */
  static readonly ApiIngresosIdPutPath = '/api/Ingresos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIngresosIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIngresosIdPut$Response(params: ApiIngresosIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiIngresosIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIngresosIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIngresosIdPut(params: ApiIngresosIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiIngresosIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiIngresosIdDelete()` */
  static readonly ApiIngresosIdDeletePath = '/api/Ingresos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIngresosIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIngresosIdDelete$Plain$Response(params: ApiIngresosIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Ingresos>> {
    return apiIngresosIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIngresosIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIngresosIdDelete$Plain(params: ApiIngresosIdDelete$Plain$Params, context?: HttpContext): Observable<Ingresos> {
    return this.apiIngresosIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ingresos>): Ingresos => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIngresosIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIngresosIdDelete$Json$Response(params: ApiIngresosIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Ingresos>> {
    return apiIngresosIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIngresosIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIngresosIdDelete$Json(params: ApiIngresosIdDelete$Json$Params, context?: HttpContext): Observable<Ingresos> {
    return this.apiIngresosIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ingresos>): Ingresos => r.body)
    );
  }

}
