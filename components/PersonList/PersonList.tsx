import { List } from "@mui/material"
import useEmployees from "../../hooks/useEmployees";
import { Employees } from "../../api/Employees";
import PersonItem from "./PersonItem";
import AddItem from "./AddItem";

type EmployeeListProps = {
    employeeClient: Employees;
    onClickDetails: (id?: string) => void;
}

export default function EmployeeList({ employeeClient, onClickDetails }: EmployeeListProps) {
    const {employees, addEmployee, deleteEmployee} = useEmployees(employeeClient)
    return (
        <List sx={{width: '60%'}}>
            {employees.map(employee => {
                return (
                    <PersonItem
                        key={employee.id}
                        employee={employee} 
                        onClickDetails={onClickDetails}
                        onClickDelete={deleteEmployee} />
                )
                
            })}
            <AddItem onAdd={addEmployee} />
        </List>
            
    )
}