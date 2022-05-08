import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { TimePeriod } from "../api/data-contracts";

type PayPeriodSelectorProps = {
    payPeriod: TimePeriod;
    setPayPeriod: (payPeriod: TimePeriod) => void;
}

export default function PayPeriodSelector({payPeriod, setPayPeriod}: PayPeriodSelectorProps) {
    const id = 'pay-period-selector'

    const onChange = (event: SelectChangeEvent) => {
        setPayPeriod(event.target.value as TimePeriod)
    }

    return (
        <FormControl variant="standard">
            <InputLabel id={id}>Pay Period</InputLabel>
            <Select
                labelId={id}
                value={payPeriod}
                onChange={onChange}
                label="PayPeriod"
            >
                <MenuItem value={TimePeriod.PerYear}>Per Year</MenuItem>
                <MenuItem value={TimePeriod.PerPaycheck}>Per Paycheck</MenuItem>
            </Select>
        </FormControl>
    )
}