/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiEjerciciosGet$Json } from '../fn/ejercicios/api-ejercicios-get-json';
import { ApiEjerciciosGet$Json$Params } from '../fn/ejercicios/api-ejercicios-get-json';
import { apiEjerciciosGet$Plain } from '../fn/ejercicios/api-ejercicios-get-plain';
import { ApiEjerciciosGet$Plain$Params } from '../fn/ejercicios/api-ejercicios-get-plain';
import { apiEjerciciosIdDelete } from '../fn/ejercicios/api-ejercicios-id-delete';
import { ApiEjerciciosIdDelete$Params } from '../fn/ejercicios/api-ejercicios-id-delete';
import { apiEjerciciosIdGet$Json } from '../fn/ejercicios/api-ejercicios-id-get-json';
import { ApiEjerciciosIdGet$Json$Params } from '../fn/ejercicios/api-ejercicios-id-get-json';
import { apiEjerciciosIdGet$Plain } from '../fn/ejercicios/api-ejercicios-id-get-plain';
import { ApiEjerciciosIdGet$Plain$Params } from '../fn/ejercicios/api-ejercicios-id-get-plain';
import { apiEjerciciosIdPut } from '../fn/ejercicios/api-ejercicios-id-put';
import { ApiEjerciciosIdPut$Params } from '../fn/ejercicios/api-ejercicios-id-put';
import { apiEjerciciosPost$Json } from '../fn/ejercicios/api-ejercicios-post-json';
import { ApiEjerciciosPost$Json$Params } from '../fn/ejercicios/api-ejercicios-post-json';
import { apiEjerciciosPost$Plain } from '../fn/ejercicios/api-ejercicios-post-plain';
import { ApiEjerciciosPost$Plain$Params } from '../fn/ejercicios/api-ejercicios-post-plain';
import { Ejercicio } from '../models/ejercicio';

@Injectable({ providedIn: 'root' })
export class EjerciciosService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiEjerciciosGet()` */
  static readonly ApiEjerciciosGetPath = '/api/Ejercicios';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEjerciciosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosGet$Plain$Response(params?: ApiEjerciciosGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ejercicio>>> {
    return apiEjerciciosGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEjerciciosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosGet$Plain(params?: ApiEjerciciosGet$Plain$Params, context?: HttpContext): Observable<Array<Ejercicio>> {
    return this.apiEjerciciosGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Ejercicio>>): Array<Ejercicio> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEjerciciosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosGet$Json$Response(params?: ApiEjerciciosGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ejercicio>>> {
    return apiEjerciciosGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEjerciciosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosGet$Json(params?: ApiEjerciciosGet$Json$Params, context?: HttpContext): Observable<Array<Ejercicio>> {
    return this.apiEjerciciosGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Ejercicio>>): Array<Ejercicio> => r.body)
    );
  }

  /** Path part for operation `apiEjerciciosPost()` */
  static readonly ApiEjerciciosPostPath = '/api/Ejercicios';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEjerciciosPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEjerciciosPost$Plain$Response(params?: ApiEjerciciosPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Ejercicio>> {
    return apiEjerciciosPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEjerciciosPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEjerciciosPost$Plain(params?: ApiEjerciciosPost$Plain$Params, context?: HttpContext): Observable<Ejercicio> {
    return this.apiEjerciciosPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ejercicio>): Ejercicio => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEjerciciosPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEjerciciosPost$Json$Response(params?: ApiEjerciciosPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Ejercicio>> {
    return apiEjerciciosPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEjerciciosPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEjerciciosPost$Json(params?: ApiEjerciciosPost$Json$Params, context?: HttpContext): Observable<Ejercicio> {
    return this.apiEjerciciosPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ejercicio>): Ejercicio => r.body)
    );
  }

  /** Path part for operation `apiEjerciciosIdGet()` */
  static readonly ApiEjerciciosIdGetPath = '/api/Ejercicios/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEjerciciosIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosIdGet$Plain$Response(params: ApiEjerciciosIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Ejercicio>> {
    return apiEjerciciosIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEjerciciosIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosIdGet$Plain(params: ApiEjerciciosIdGet$Plain$Params, context?: HttpContext): Observable<Ejercicio> {
    return this.apiEjerciciosIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ejercicio>): Ejercicio => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEjerciciosIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosIdGet$Json$Response(params: ApiEjerciciosIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Ejercicio>> {
    return apiEjerciciosIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEjerciciosIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosIdGet$Json(params: ApiEjerciciosIdGet$Json$Params, context?: HttpContext): Observable<Ejercicio> {
    return this.apiEjerciciosIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ejercicio>): Ejercicio => r.body)
    );
  }

  /** Path part for operation `apiEjerciciosIdPut()` */
  static readonly ApiEjerciciosIdPutPath = '/api/Ejercicios/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEjerciciosIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEjerciciosIdPut$Response(params: ApiEjerciciosIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEjerciciosIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEjerciciosIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEjerciciosIdPut(params: ApiEjerciciosIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiEjerciciosIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEjerciciosIdDelete()` */
  static readonly ApiEjerciciosIdDeletePath = '/api/Ejercicios/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEjerciciosIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosIdDelete$Response(params: ApiEjerciciosIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEjerciciosIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEjerciciosIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEjerciciosIdDelete(params: ApiEjerciciosIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiEjerciciosIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
