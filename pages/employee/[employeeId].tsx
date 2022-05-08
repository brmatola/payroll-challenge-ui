import { CircularProgress, Grid, Paper, Stack, Typography } from "@mui/material";
import { Dependents } from "../../api/Dependents";
import { Employees } from "../../api/Employees"
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import useEmployeeDetails from "../../hooks/useEmployeeDetails";
import TitleCard from "../../components/TitleCard";
import PersonList from "../../components/PersonList";
import useDependents from "../../hooks/useDependents";
import useBenefits from "../../hooks/useBenefits";
import Loading from "../../components/Loading";
import { DependentViewModel, TimePeriod } from '../../api/data-contracts'
import { useState } from "react";
import PayPeriodSelector from "../../components/PayPeriodSelector";


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

function PaySection({employeeClient, employeeId, dependents}: {
    employeeClient: Employees;
    employeeId: string;
    dependents: DependentViewModel[];
}) {
    const [payPeriod, setPayPeriod] = useState(TimePeriod.PerYear)
    const { benefits, paycheck, isLoading } = useBenefits(employeeClient, employeeId, payPeriod, dependents)
    return (
        <Stack spacing={2}>
            <PayPeriodSelector payPeriod={payPeriod} setPayPeriod={setPayPeriod} />
            {isLoading ? <CircularProgress /> : (
                <>
                    <TitleCard text={`Benefit Cost: $${benefits}`} />
                    <TitleCard text={`Paycheck: $${paycheck}`} />
                </>
            )}
        </Stack>
    )
}

export default function EmployeeDetails({
    employeeClient,
    dependentClient
}: EmployeeDetailProps) {
    const employeeId = useEmployeeId()
    const { dependents, addDependent, deleteDependent, isLoading: isLoadingDependents } = useDependents(employeeClient, dependentClient, employeeId)
    const { employeeDetails, isLoading: isLoadingDetails } = useEmployeeDetails(employeeClient, employeeId)

    if (isLoadingDependents || isLoadingDetails) 
        return <Loading />
    
    return (
        <main className={styles.main}>
            <Typography variant="h1">{employeeDetails?.name}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <Typography variant="h2">Dependents</Typography>
                        <PersonList
                            people={dependents}
                            addPerson={addDependent}
                            deletePerson={deleteDependent}
                            />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <PaySection
                        employeeId={employeeId}
                        employeeClient={employeeClient}
                        dependents={dependents}
                    />
                </Grid>
            </Grid>
        </main>
    )
}
