import { rest } from "msw";
import { Employees } from "../../api/Employees";

export const employeeClient = new Employees({baseUrl: 'http://test-backend.com'})

export const handlers = [
    rest.get('http://test-backend.com/Employees', (req, res, ctx) => {
        return res(ctx.json([{ id: '1', name: 'Brad' }]))
    })
]
