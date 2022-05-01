import { Employees } from '../api/Employees'
import useFetch from './useFetch'

export default function useEmployeeDetails(employeeClient: Employees, id: string) {
    const getData = async () => {
        const resp = await employeeClient.employeesDetail(id)
        if (!resp.ok) throw new Error(`received ${resp.status} ${resp.statusText} from employee details`)

        return resp.data
    }

    const { data, isLoading } = useFetch(getData, [id])

    return {
        employeeDetails: data,
        isLoading
    }
}