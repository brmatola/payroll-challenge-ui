import type { NextPage } from 'next'
import { Employees } from '../api/Employees'
import EmployeeList from '../components/EmployeeList'
import useEmployees from '../hooks/useEmployees'
import styles from '../styles/Home.module.css'

type HomeProps = {
  employeeClient: Employees
}

const Home: NextPage<HomeProps> = ({ employeeClient }: HomeProps) => {
  const employees = useEmployees(employeeClient)
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
          Employee Management
        </h1>

        <EmployeeList employeeClient={employeeClient} />
        
        
    </main>
  )
}

export default Home
