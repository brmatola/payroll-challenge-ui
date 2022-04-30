/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { DependentViewModel } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Dependents<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Dependents
   * @name DependentsDetail
   * @request GET:/dependents/{dependentId}
   */
  dependentsDetail = (dependentId: string, params: RequestParams = {}) =>
    this.request<DependentViewModel, any>({
      path: `/dependents/${dependentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dependents
   * @name DependentsDelete
   * @request DELETE:/dependents/{dependentId}
   */
  dependentsDelete = (dependentId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/dependents/${dependentId}`,
      method: "DELETE",
      ...params,
    });
}
