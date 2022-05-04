import { Dependents } from '../api/Dependents'
import { Employees } from '../api/Employees'
import useFetch from './useFetch'

export default function useDependents(employeeClient: Employees, dependentsClient: Dependents, employeeId: string) {
  const getData = async () => {
    const resp = await employeeClient.dependentsDetail(employeeId)
    if (!resp.ok) throw new Error(`recieved ${resp.status} ${resp.statusText} from employee list request`)

      return resp.data
  }
  const {
    data: dependents,
    setData: setDependents,
    isLoading
  } = useFetch(getData, [], [])


  if (!dependents) throw new Error()

  const addDependent = async (name: string) => {
    const resp = await employeeClient.dependentsCreate(employeeId, { name })
    if (!resp.ok) throw new Error(`received ${resp.status} ${resp.statusText} from employee creat`)

    setDependents([...dependents, resp.data])
  }

  const deleteDependent = async (id?: string) => {
    if (!id) throw new Error()
    const resp = await dependentsClient.dependentsDelete(id)
    if (!resp.ok) throw new Error(`received ${resp.status} ${resp.statusText} from employee delete`)

    const index = dependents.findIndex(x => x.id === id)
    dependents.splice(index, 1)
    setDependents([...dependents])
  }

  return {
    dependents,
    addDependent,
    deleteDependent,
    isLoading
  }
}