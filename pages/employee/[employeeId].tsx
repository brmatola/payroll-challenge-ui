import { Grid, Paper, Stack, Typography } from "@mui/material";
import { Dependents } from "../../api/Dependents";
import { Employees } from "../../api/Employees"
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import useEmployeeDetails from "../../hooks/useEmployeeDetails";
import TitleCard from "../../components/TitleCard";
import PersonList from "../../components/PersonList";


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
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <Typography variant="h2">Dependents</Typography>
                        <PersonList employeeClient={employeeClient} onClickDetails={() => {}}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={2}>
                        <TitleCard text="Benefit Cost: $2500" />
                        <TitleCard text="Paycheck: $49500" />
                    </Stack>
                </Grid>
            </Grid>
        </main>
    )
}
