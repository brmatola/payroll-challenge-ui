import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, List, Typography } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete'
import useEmployees from "../hooks/useEmployees";
import { Employees } from "../api/Employees";

type EmployeeItemProps = {
    employee: { name?: string | null | undefined; }
}

const EmployeeItem = ({ employee }: EmployeeItemProps) => {
    return (
        <ListItem secondaryAction={
            <IconButton edge="end" aria-label="delete" disabled>
                <DeleteIcon />
            </IconButton>
            }>
                <ListItemAvatar>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={employee.name} />
        </ListItem>
    )
}

type EmployeeListProps = {
    employeeClient: Employees;
}

export default function EmployeeList({ employeeClient }: EmployeeListProps) {
    const employees = useEmployees(employeeClient)
    return (
        <List style={{width: '60%'}}>
            {employees.map(employee => {
                return <EmployeeItem employee={employee} />
            })}
        </List>
    )
}