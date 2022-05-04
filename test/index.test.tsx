import {render, screen} from '@testing-library/react'
import Home from '../pages/index'
import { employeeClient } from './mocks'

describe('Employee Management', () => {
    test('displays title', async () => {
        render(<Home employeeClient={employeeClient} />)

        await screen.findByText('Manager of Employees')
    })

    test('Displays employees', async () => {
        render(<Home employeeClient={employeeClient} />)

        await screen.findByText('Brad')
    })
})

