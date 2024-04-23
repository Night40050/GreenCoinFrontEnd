/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserChangePasswordPost } from '../fn/user/api-user-change-password-post';
import { ApiUserChangePasswordPost$Params } from '../fn/user/api-user-change-password-post';
import { apiUserDeleteUserDniDelete } from '../fn/user/api-user-delete-user-dni-delete';
import { ApiUserDeleteUserDniDelete$Params } from '../fn/user/api-user-delete-user-dni-delete';
import { apiUserGetUserDniGet } from '../fn/user/api-user-get-user-dni-get';
import { ApiUserGetUserDniGet$Params } from '../fn/user/api-user-get-user-dni-get';
import { apiUserReadUsersPost } from '../fn/user/api-user-read-users-post';
import { ApiUserReadUsersPost$Params } from '../fn/user/api-user-read-users-post';
import { apiUserRegisterUserPost } from '../fn/user/api-user-register-user-post';
import { ApiUserRegisterUserPost$Params } from '../fn/user/api-user-register-user-post';
import { apiUserUpdateUserDniPut } from '../fn/user/api-user-update-user-dni-put';
import { ApiUserUpdateUserDniPut$Params } from '../fn/user/api-user-update-user-dni-put';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserRegisterUserPost()` */
  static readonly ApiUserRegisterUserPostPath = '/api/User/Register_User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRegisterUserPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterUserPost$Response(params?: ApiUserRegisterUserPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserRegisterUserPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRegisterUserPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterUserPost(params?: ApiUserRegisterUserPost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserRegisterUserPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserChangePasswordPost()` */
  static readonly ApiUserChangePasswordPostPath = '/api/User/ChangePassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangePasswordPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordPost$Response(params?: ApiUserChangePasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserChangePasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserChangePasswordPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordPost(params?: ApiUserChangePasswordPost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserChangePasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserReadUsersPost()` */
  static readonly ApiUserReadUsersPostPath = '/api/User/ReadUsers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserReadUsersPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserReadUsersPost$Response(params?: ApiUserReadUsersPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserReadUsersPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserReadUsersPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserReadUsersPost(params?: ApiUserReadUsersPost$Params, context?: HttpContext): Observable<void> {
    return this.apiUserReadUsersPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserUpdateUserDniPut()` */
  static readonly ApiUserUpdateUserDniPutPath = '/api/User/UpdateUser/{dni}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserDniPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserDniPut$Response(params: ApiUserUpdateUserDniPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserUpdateUserDniPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateUserDniPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserDniPut(params: ApiUserUpdateUserDniPut$Params, context?: HttpContext): Observable<void> {
    return this.apiUserUpdateUserDniPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserDeleteUserDniDelete()` */
  static readonly ApiUserDeleteUserDniDeletePath = '/api/User/DeleteUser/{dni}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDeleteUserDniDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserDniDelete$Response(params: ApiUserDeleteUserDniDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserDeleteUserDniDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserDeleteUserDniDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDeleteUserDniDelete(params: ApiUserDeleteUserDniDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUserDeleteUserDniDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserGetUserDniGet()` */
  static readonly ApiUserGetUserDniGetPath = '/api/User/GetUser/{dni}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserDniGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserDniGet$Response(params: ApiUserGetUserDniGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserGetUserDniGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserDniGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserDniGet(params: ApiUserGetUserDniGet$Params, context?: HttpContext): Observable<void> {
    return this.apiUserGetUserDniGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
