import { Employees } from "../api/Employees"
import { Dependents } from "../api/Dependents"
import useFetch from "./useFetch"

export default function useApi() {
    const getData = async () => {
        const resp = await fetch('/api/config')
        const { apiUrl } = await resp.json()
        
        return {
            employeeClient: new Employees({ baseUrl: apiUrl }),
            dependentClient: new Dependents({ baseUrl: apiUrl })
        }
    }
    
    const { data, isLoading } = useFetch(getData)

    return {
        isLoading,
        employeeClient: data?.employeeClient,
        dependentClient: data?.dependentClient
    }
}