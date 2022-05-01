import { ListItem, IconButton, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import InfoIcon from '@mui/icons-material/Info'
import PersonAvatar from "./PersonAvatar"

type EmployeeItemProps = {
    employee: { name?: string | null | undefined; }
    onClickDetails: () => void;
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

export default EmployeeItem