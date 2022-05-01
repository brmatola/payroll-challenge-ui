import { Typography } from "@mui/material";
import { Dependents } from "../../api/Dependents";
import { Employees } from "../../api/Employees"
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'


type EmployeeDetailProps = {
    employeeClient: Employees;
    dependentClient: Dependents;
}

export default function EmployeeDetails({
    employeeClient,
    dependentClient
}: EmployeeDetailProps) {
    const router = useRouter()
    const { employeeId } = router.query
    return (
        <main className={styles.main}>
            <Typography variant="h1">{employeeId}</Typography>
        </main>
    )
}
