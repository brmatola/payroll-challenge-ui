import {render, screen} from '@testing-library/react'
import EmployeeDetails from '../pages/employee/[employeeId]'
import { employeeClient, dependentClient } from './mocks'
import singletonRouter from 'next/router'

jest.mock('next/dist/client/router', () => require('next-router-mock'))

const doRender = () => {
    render(<EmployeeDetails 
                employeeClient={employeeClient} 
                dependentClient={dependentClient} />)
}

describe('Employee Management', () => {
    beforeEach(() => {
        singletonRouter.push({
            pathname: '/employee/[employeeId]',
            query: { employeeId: '1'}
        })
    })
    test('displays title', async () => {
        doRender()

        await screen.findByText('Brad')
    })

    test('Displays dependents', async () => {
        doRender()

        await screen.findByText('Noodle')
    })

    test('Displays benefits', async () => {
        doRender()

        await screen.findByText('Benefit Cost: $1500')
    })

    test('Displays paycheck', async () => {
        doRender()

        await screen.findByText('Paycheck: $50500')
    })
})

