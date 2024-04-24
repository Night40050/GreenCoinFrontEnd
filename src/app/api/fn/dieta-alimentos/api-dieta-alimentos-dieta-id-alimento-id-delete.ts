/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiDietaAlimentosDietaIdAlimentoIdDelete$Params {
  dietaId: number;
  alimentoId: number;
}

export function apiDietaAlimentosDietaIdAlimentoIdDelete(http: HttpClient, rootUrl: string, params: ApiDietaAlimentosDietaIdAlimentoIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiDietaAlimentosDietaIdAlimentoIdDelete.PATH, 'delete');
  if (params) {
    rb.path('dietaId', params.dietaId, {});
    rb.path('alimentoId', params.alimentoId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiDietaAlimentosDietaIdAlimentoIdDelete.PATH = '/api/DietaAlimentos/{dietaId}/{alimentoId}';
