import { DependentViewModel } from "../api/data-contracts"
import { Employees } from "../api/Employees"
import useFetch from "./useFetch"

export default function useBenefits(employeeClient: Employees, employeeId: string, dependents: DependentViewModel[]) {
    const getBenefits = async () => {
        const resp = await employeeClient.benefitCostDetail(employeeId)
        if (!resp.ok) throw new Error(`Received ${resp.status} ${resp.statusText} from benefit details`)

        const cost = resp.data.dollarPerYear
        return cost
    }

    const { data: benefits } = useFetch(getBenefits, [dependents], 0)
    if (benefits === undefined) throw new Error('no cost returned')

    return {
        benefits,
        paycheck: 52000-benefits
    }
}