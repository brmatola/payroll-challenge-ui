import { DependentViewModel } from "../api/data-contracts"
import { Employees } from "../api/Employees"
import useFetch from "./useFetch"

export default function useBenefits(employeeClient: Employees, employeeId: string, dependents: DependentViewModel[]) {
    const getBenefits = async () => {
        const resp = await employeeClient.benefitCostDetail(employeeId)
        if (!resp.ok) throw new Error(`Received ${resp.status} ${resp.statusText} from benefit details`)

        const payResp = await employeeClient.paycheckDetail(employeeId);
        if (!payResp.ok) throw new Error(`Received ${payResp.status} ${payResp.statusText} from benefit details`)

        return {
            benefits: resp.data.dollarPerYear,
            paycheck: payResp.data.dollarPerYear
        }
    }

    const { data, isLoading } = useFetch(getBenefits, [dependents])

    if (!isLoading && (data?.benefits === undefined || data?.paycheck === undefined))
        throw new Error('invalid response')

    return {
        isLoading,
        benefits: data?.benefits,
        paycheck: data?.paycheck
    }
}