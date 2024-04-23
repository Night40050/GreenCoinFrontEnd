/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiContenidoEducativoIdDelete$Json } from '../fn/contenido-educativo/api-contenido-educativo-id-delete-json';
import { ApiContenidoEducativoIdDelete$Json$Params } from '../fn/contenido-educativo/api-contenido-educativo-id-delete-json';
import { apiContenidoEducativoIdDelete$Plain } from '../fn/contenido-educativo/api-contenido-educativo-id-delete-plain';
import { ApiContenidoEducativoIdDelete$Plain$Params } from '../fn/contenido-educativo/api-contenido-educativo-id-delete-plain';
import { apiContenidoEducativoIdPut } from '../fn/contenido-educativo/api-contenido-educativo-id-put';
import { ApiContenidoEducativoIdPut$Params } from '../fn/contenido-educativo/api-contenido-educativo-id-put';
import { apiContenidoEducativoPost$Json } from '../fn/contenido-educativo/api-contenido-educativo-post-json';
import { ApiContenidoEducativoPost$Json$Params } from '../fn/contenido-educativo/api-contenido-educativo-post-json';
import { apiContenidoEducativoPost$Plain } from '../fn/contenido-educativo/api-contenido-educativo-post-plain';
import { ApiContenidoEducativoPost$Plain$Params } from '../fn/contenido-educativo/api-contenido-educativo-post-plain';
import { ContenidoEducativo } from '../models/contenido-educativo';
import { getContenidoEducativo$Json } from '../fn/contenido-educativo/get-contenido-educativo-json';
import { GetContenidoEducativo$Json$Params } from '../fn/contenido-educativo/get-contenido-educativo-json';
import { getContenidoEducativo$Plain } from '../fn/contenido-educativo/get-contenido-educativo-plain';
import { GetContenidoEducativo$Plain$Params } from '../fn/contenido-educativo/get-contenido-educativo-plain';
import { getContenidosEducativos$Json } from '../fn/contenido-educativo/get-contenidos-educativos-json';
import { GetContenidosEducativos$Json$Params } from '../fn/contenido-educativo/get-contenidos-educativos-json';
import { getContenidosEducativos$Plain } from '../fn/contenido-educativo/get-contenidos-educativos-plain';
import { GetContenidosEducativos$Plain$Params } from '../fn/contenido-educativo/get-contenidos-educativos-plain';

@Injectable({ providedIn: 'root' })
export class ContenidoEducativoService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getContenidosEducativos()` */
  static readonly GetContenidosEducativosPath = '/api/ContenidoEducativo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContenidosEducativos$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContenidosEducativos$Plain$Response(params?: GetContenidosEducativos$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContenidoEducativo>>> {
    return getContenidosEducativos$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getContenidosEducativos$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContenidosEducativos$Plain(params?: GetContenidosEducativos$Plain$Params, context?: HttpContext): Observable<Array<ContenidoEducativo>> {
    return this.getContenidosEducativos$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContenidoEducativo>>): Array<ContenidoEducativo> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContenidosEducativos$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContenidosEducativos$Json$Response(params?: GetContenidosEducativos$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContenidoEducativo>>> {
    return getContenidosEducativos$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getContenidosEducativos$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContenidosEducativos$Json(params?: GetContenidosEducativos$Json$Params, context?: HttpContext): Observable<Array<ContenidoEducativo>> {
    return this.getContenidosEducativos$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContenidoEducativo>>): Array<ContenidoEducativo> => r.body)
    );
  }

  /** Path part for operation `apiContenidoEducativoPost()` */
  static readonly ApiContenidoEducativoPostPath = '/api/ContenidoEducativo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContenidoEducativoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContenidoEducativoPost$Plain$Response(params?: ApiContenidoEducativoPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
    return apiContenidoEducativoPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContenidoEducativoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContenidoEducativoPost$Plain(params?: ApiContenidoEducativoPost$Plain$Params, context?: HttpContext): Observable<ContenidoEducativo> {
    return this.apiContenidoEducativoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContenidoEducativo>): ContenidoEducativo => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContenidoEducativoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContenidoEducativoPost$Json$Response(params?: ApiContenidoEducativoPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
    return apiContenidoEducativoPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContenidoEducativoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContenidoEducativoPost$Json(params?: ApiContenidoEducativoPost$Json$Params, context?: HttpContext): Observable<ContenidoEducativo> {
    return this.apiContenidoEducativoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContenidoEducativo>): ContenidoEducativo => r.body)
    );
  }

  /** Path part for operation `getContenidoEducativo()` */
  static readonly GetContenidoEducativoPath = '/api/ContenidoEducativo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContenidoEducativo$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContenidoEducativo$Plain$Response(params: GetContenidoEducativo$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
    return getContenidoEducativo$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getContenidoEducativo$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContenidoEducativo$Plain(params: GetContenidoEducativo$Plain$Params, context?: HttpContext): Observable<ContenidoEducativo> {
    return this.getContenidoEducativo$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContenidoEducativo>): ContenidoEducativo => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getContenidoEducativo$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContenidoEducativo$Json$Response(params: GetContenidoEducativo$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
    return getContenidoEducativo$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getContenidoEducativo$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getContenidoEducativo$Json(params: GetContenidoEducativo$Json$Params, context?: HttpContext): Observable<ContenidoEducativo> {
    return this.getContenidoEducativo$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContenidoEducativo>): ContenidoEducativo => r.body)
    );
  }

  /** Path part for operation `apiContenidoEducativoIdPut()` */
  static readonly ApiContenidoEducativoIdPutPath = '/api/ContenidoEducativo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContenidoEducativoIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContenidoEducativoIdPut$Response(params: ApiContenidoEducativoIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiContenidoEducativoIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContenidoEducativoIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContenidoEducativoIdPut(params: ApiContenidoEducativoIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiContenidoEducativoIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiContenidoEducativoIdDelete()` */
  static readonly ApiContenidoEducativoIdDeletePath = '/api/ContenidoEducativo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContenidoEducativoIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContenidoEducativoIdDelete$Plain$Response(params: ApiContenidoEducativoIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
    return apiContenidoEducativoIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContenidoEducativoIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContenidoEducativoIdDelete$Plain(params: ApiContenidoEducativoIdDelete$Plain$Params, context?: HttpContext): Observable<ContenidoEducativo> {
    return this.apiContenidoEducativoIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContenidoEducativo>): ContenidoEducativo => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContenidoEducativoIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContenidoEducativoIdDelete$Json$Response(params: ApiContenidoEducativoIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContenidoEducativo>> {
    return apiContenidoEducativoIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContenidoEducativoIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContenidoEducativoIdDelete$Json(params: ApiContenidoEducativoIdDelete$Json$Params, context?: HttpContext): Observable<ContenidoEducativo> {
    return this.apiContenidoEducativoIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContenidoEducativo>): ContenidoEducativo => r.body)
    );
  }

}
