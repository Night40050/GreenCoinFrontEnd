/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDietaAlimentosDietaIdAlimentoIdDelete } from '../fn/dieta-alimentos/api-dieta-alimentos-dieta-id-alimento-id-delete';
import { ApiDietaAlimentosDietaIdAlimentoIdDelete$Params } from '../fn/dieta-alimentos/api-dieta-alimentos-dieta-id-alimento-id-delete';
import { apiDietaAlimentosPost } from '../fn/dieta-alimentos/api-dieta-alimentos-post';
import { ApiDietaAlimentosPost$Params } from '../fn/dieta-alimentos/api-dieta-alimentos-post';

@Injectable({ providedIn: 'root' })
export class DietaAlimentosService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDietaAlimentosPost()` */
  static readonly ApiDietaAlimentosPostPath = '/api/DietaAlimentos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietaAlimentosPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDietaAlimentosPost$Response(params?: ApiDietaAlimentosPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDietaAlimentosPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietaAlimentosPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDietaAlimentosPost(params?: ApiDietaAlimentosPost$Params, context?: HttpContext): Observable<void> {
    return this.apiDietaAlimentosPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiDietaAlimentosDietaIdAlimentoIdDelete()` */
  static readonly ApiDietaAlimentosDietaIdAlimentoIdDeletePath = '/api/DietaAlimentos/{dietaId}/{alimentoId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDietaAlimentosDietaIdAlimentoIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietaAlimentosDietaIdAlimentoIdDelete$Response(params: ApiDietaAlimentosDietaIdAlimentoIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDietaAlimentosDietaIdAlimentoIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDietaAlimentosDietaIdAlimentoIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDietaAlimentosDietaIdAlimentoIdDelete(params: ApiDietaAlimentosDietaIdAlimentoIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiDietaAlimentosDietaIdAlimentoIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
