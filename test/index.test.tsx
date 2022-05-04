import { rest } from 'msw'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import { setupServer } from 'msw/node'
import Home from '../pages/index'
import { Employees } from '../api/Employees'

const server = setupServer(
    rest.get('http://test-backend.com/Employees', (req, res, ctx) => {
        return res(ctx.json([{ id: '1', name: 'Brad' }]))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('displays title', async () => {
    const employeeClient = new Employees({baseUrl: 'http://test-backend.com'})
    render(<Home employeeClient={employeeClient} />)

    await screen.findByText('Manager of Employees')
})

test('Displays employees', async () => {
    const employeeClient = new Employees({baseUrl: 'http://test-backend.com'})
    render(<Home employeeClient={employeeClient} />)

    await screen.findByText('Brad')
})