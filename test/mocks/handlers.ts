import { rest } from "msw";
import { Dependents } from "../../api/Dependents";
import { Employees } from "../../api/Employees";

const URL = 'http://test-backend.com'

export const employeeClient = new Employees({baseUrl: URL})
export const dependentClient = new Dependents({baseUrl: URL})

export const handlers = [
    rest.get(`${URL}/Employees`, (req, res, ctx) => {
        return res(ctx.json([{ id: '1', name: 'Brad' }]))
    }),
    rest.get(`${URL}/Employees/1`, (req, res, ctx) => {
        return res(ctx.json({id: '1', name: 'Brad'}))
    }),
    rest.get(`${URL}/Employees/1/benefit_cost`, (req, res, ctx) => {
        return res(ctx.json({dollarPerYear: 1500}))
    }),
    rest.get(`${URL}/Employees/1/paycheck`, (req, res, ctx) => {
        return res(ctx.json({dollarPerYear: 50500}))
    }),
    rest.get(`${URL}/Employees/1/dependents`, (req, res, ctx) => {
        return res(ctx.json([{id: '2', name: 'Noodle'}]))
    })
]
