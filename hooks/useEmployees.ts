import { Employees } from "../api/Employees"
import useFetch from "./useFetch"

export default function useEmployees(employeeClient: Employees) {
  const getData = async () => {
    const resp = await employeeClient.employeesList()
    if (!resp.ok) throw new Error(`recieved ${resp.status} ${resp.statusText} from employee list request`)

      return resp.data
  }
  const {
    data: employees,
    setData: setEmployees
  } = useFetch(getData, [], [])

  if (!employees) throw new Error()

  const addEmployee = async (name: string) => {
    const resp = await employeeClient.employeesCreate({ name })
    if (!resp.ok) throw new Error(`received ${resp.status} ${resp.statusText} from employee creat`)

    setEmployees([...employees, resp.data])
  }

  const deleteEmployee = async (id?: string) => {
    if (!id) throw new Error()
    const resp = await employeeClient.employeesDelete(id)
    if (!resp.ok) throw new Error(`received ${resp.status} ${resp.statusText} from employee delete`)

    const index = employees.findIndex(x => x.id === id)
    employees.splice(index, 1)
    setEmployees([...employees])
  }

  return {
    employees,
    addEmployee,
    deleteEmployee
  }
}