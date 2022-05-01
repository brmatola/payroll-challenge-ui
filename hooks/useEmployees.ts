import { Employees } from "../api/Employees"
import useFetch from "./useFetch"

export default function useEmployees(employeeClient: Employees) {
  const getData = async () => {
    const resp = await employeeClient.employeesList()
      if (!resp.ok) throw new Error(`recieved ${resp.status} ${resp.statusText} from employee list request`)

      return resp.data
  }
  const {
    data: employees
  } = useFetch(getData, [])

  if (!employees) throw new Error()

  return employees
}