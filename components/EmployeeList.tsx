import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, List, Typography, Box, ListItemButton } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete'
import InfoIcon from '@mui/icons-material/Info'
import useEmployees from "../hooks/useEmployees";
import { Employees } from "../api/Employees";

type EmployeeItemProps = {
    employee: { name?: string | null | undefined; }
    onClickDetails: () => void;
}

const PersonAvatar = () => {
    return (
        <ListItemAvatar>
            <Avatar>
                <PersonIcon />
            </Avatar>
        </ListItemAvatar>
    )
}

const EmployeeItem = ({ employee, onClickDetails }: EmployeeItemProps) => {
    return (
        <ListItem secondaryAction={
            <>
                <IconButton edge="start" aria-label="details" onClick={onClickDetails}>
                    <InfoIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" disabled>
                    <DeleteIcon />
                </IconButton>
            </>}>
                <PersonAvatar />
                <ListItemText primary={employee.name} />
        </ListItem>
    )
}

type EmployeeListProps = {
    employeeClient: Employees;
    onClickDetails: (id?: string) => void;
}

export default function EmployeeList({ employeeClient, onClickDetails }: EmployeeListProps) {
    const employees = useEmployees(employeeClient)
    return (
            <List style={{width: '60%'}}>
                {employees.map(employee => {
                    const onClickEmployeeDetails = () => onClickDetails(employee.id)
                    return <EmployeeItem employee={employee} onClickDetails={onClickEmployeeDetails} />
                })}
            </List>
    )
}