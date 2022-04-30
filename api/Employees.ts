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

import {
  BenefitCostResponse,
  DependentViewModel,
  EmployeeViewModel,
  NewDependentRequest,
  NewEmployeeRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Employees<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Dependents
   * @name DependentsDetail
   * @request GET:/employees/{employeeId}/dependents
   */
  dependentsDetail = (employeeId: string, params: RequestParams = {}) =>
    this.request<DependentViewModel[], any>({
      path: `/employees/${employeeId}/dependents`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Dependents
   * @name DependentsCreate
   * @request POST:/employees/{employeeId}/dependents
   */
  dependentsCreate = (employeeId: string, data: NewDependentRequest, params: RequestParams = {}) =>
    this.request<DependentViewModel, any>({
      path: `/employees/${employeeId}/dependents`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Employees
   * @name EmployeesList
   * @request GET:/Employees
   */
  employeesList = (params: RequestParams = {}) =>
    this.request<EmployeeViewModel[], any>({
      path: `/Employees`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Employees
   * @name EmployeesCreate
   * @request POST:/Employees
   */
  employeesCreate = (data: NewEmployeeRequest, params: RequestParams = {}) =>
    this.request<EmployeeViewModel, any>({
      path: `/Employees`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Employees
   * @name EmployeesDetail
   * @request GET:/Employees/{id}
   */
  employeesDetail = (id: string, params: RequestParams = {}) =>
    this.request<EmployeeViewModel, any>({
      path: `/Employees/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Employees
   * @name EmployeesDelete
   * @request DELETE:/Employees/{id}
   */
  employeesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/Employees/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Employees
   * @name BenefitCostDetail
   * @request GET:/Employees/{id}/benefit_cost
   */
  benefitCostDetail = (id: string, params: RequestParams = {}) =>
    this.request<BenefitCostResponse, any>({
      path: `/Employees/${id}/benefit_cost`,
      method: "GET",
      format: "json",
      ...params,
    });
}
