import { useState, useEffect } from "react"
import { EmployeeViewModel } from "../api/data-contracts"
import { Employees } from "../api/Employees"

export default function useEmployees(employeeClient: Employees) {
  const [employees, setEmployees] = useState<EmployeeViewModel[]>([])

  useEffect(() => {
    const doFetch = async () => {
      const resp = await employeeClient.employeesList()
      if (!resp.ok) throw new Error(`recieved ${resp.status} ${resp.statusText} from employee list request`)
      
      setEmployees(resp.data)
    }

    doFetch()
  }, [])

  return employees
}