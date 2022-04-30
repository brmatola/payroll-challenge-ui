import { Employees } from "../api/Employees"
import { Dependents } from "../api/Dependents"
import { useEffect, useState } from "react"

export default function useApi() {
    const [employeeClient, setEmployees] = useState<Employees>()
    const [dependentClient, setDependents] = useState<Dependents>()

    useEffect(() => {
        const doFetch = async () => {
            const resp = await fetch('/api/config');
            const {apiUrl} = await resp.json()
            setEmployees(new Employees({baseUrl: apiUrl}))
            setDependents(new Dependents({baseUrl: apiUrl}))
        }

        doFetch()
    }, [])

    return {
        isLoading: !employeeClient || !dependentClient,
        employeeClient,
        dependentClient
    }
}