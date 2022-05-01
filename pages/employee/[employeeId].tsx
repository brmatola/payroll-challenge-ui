import { Typography } from "@mui/material";
import { Dependents } from "../../api/Dependents";
import { Employees } from "../../api/Employees"
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import useEmployeeDetails from "../../hooks/useEmployeeDetails";


type EmployeeDetailProps = {
    employeeClient: Employees;
    dependentClient: Dependents;
}

const useEmployeeId = () => {
    const router = useRouter()
    const { employeeId } = router.query

    if (typeof employeeId !== 'string') throw new Error('employee Id should be a string')

    return employeeId
}

export default function EmployeeDetails({
    employeeClient,
    dependentClient
}: EmployeeDetailProps) {
    const employeeId = useEmployeeId()
    const { employeeDetails, isLoading } = useEmployeeDetails(employeeClient, employeeId)
    return (
        <main className={styles.main}>
            <Typography variant="h1">{employeeDetails?.name}</Typography>
        </main>
    )
}
