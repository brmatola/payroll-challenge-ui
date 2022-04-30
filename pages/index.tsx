import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { EmployeeViewModel } from '../api/data-contracts'
import { Employees } from '../api/Employees'
import styles from '../styles/Home.module.css'

function useEmployees(employeeClient: Employees) {
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

type HomeProps = {
  employeeClient: Employees
}

const Home: NextPage<HomeProps> = ({ employeeClient }: HomeProps) => {
  const employees = useEmployees(employeeClient)
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
          Employees
        </h1>

        {employees.map(x => <p>{x.name}</p>)}
        
    </main>
  )
}

export default Home
