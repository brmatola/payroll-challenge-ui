import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Employees } from '../api/Employees'
import EmployeeList from '../components/PersonList'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

type HomeProps = {
  employeeClient: Employees
}

const useNavigation = () => {
const router = useRouter()
  return (id?: string) => {
    router.push(`/employee/${id}`)
  }
}

const Home: NextPage<HomeProps> = ({ employeeClient }: HomeProps) => {
  const onClickDetails = useNavigation()
  return (
    <main className={styles.main}>
        <Typography variant='h1'>Employee Manager</Typography>
        <EmployeeList 
          employeeClient={employeeClient} 
          onClickDetails={onClickDetails}
        />
    </main>
  )
}

export default Home
