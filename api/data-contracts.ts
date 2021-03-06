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

export interface BenefitCostResponse {
  /** @format double */
  amount?: number;
  timePeriod?: TimePeriod;
}

export interface DependentViewModel {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface EmployeeViewModel {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface NewDependentRequest {
  name?: string | null;
}

export interface NewEmployeeRequest {
  name?: string | null;
}

export enum TimePeriod {
  PerYear = "PerYear",
  PerPaycheck = "PerPaycheck",
}
