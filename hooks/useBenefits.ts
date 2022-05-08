import { DependentViewModel } from "../api/data-contracts"
import { Employees } from "../api/Employees"
import { TimePeriod } from '../api/data-contracts'
import useFetch from "./useFetch"

export default function useBenefits(employeeClient: Employees, employeeId: string, timePeriod: TimePeriod, dependents: DependentViewModel[]) {
    const getBenefits = async () => {
        const resp = await employeeClient.benefitCostDetail(employeeId, { timePeriod })
        if (!resp.ok) throw new Error(`Received ${resp.status} ${resp.statusText} from benefit details`)

        const payResp = await employeeClient.paycheckDetail(employeeId, { timePeriod });
        if (!payResp.ok) throw new Error(`Received ${payResp.status} ${payResp.statusText} from benefit details`)

        return {
            benefits: resp.data.amount,
            paycheck: payResp.data.amount
        }
    }

    const { data, isLoading } = useFetch(getBenefits, [dependents, timePeriod])

    if (!isLoading && (data?.benefits === undefined || data?.paycheck === undefined))
        throw new Error('invalid response')

    return {
        isLoading,
        benefits: data?.benefits,
        paycheck: data?.paycheck
    }
}