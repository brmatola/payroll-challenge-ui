import { ListItem, IconButton, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import InfoIcon from '@mui/icons-material/Info'
import PersonAvatar from "./PersonAvatar"

type EmployeeItemProps = {
    employee: { id?: string; name?: string | null | undefined; }
    onClickDetails: (id?: string) => void;
    onClickDelete: (id?: string) => void;
}

const EmployeeItem = ({ employee, onClickDetails, onClickDelete }: EmployeeItemProps) => {
    const onClickEmployeeDetails = () => onClickDetails(employee.id)
    const onClickDeleteEmployee = () => onClickDelete(employee.id)
    return (
        <ListItem secondaryAction={
            <>
                <IconButton edge="start" aria-label="details" onClick={onClickEmployeeDetails}>
                    <InfoIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={onClickDeleteEmployee}>
                    <DeleteIcon />
                </IconButton>
            </>}>
                <PersonAvatar />
                <ListItemText primary={employee.name} />
        </ListItem>
    )
}

export default EmployeeItem