import { ListItemAvatar, Avatar } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';

const PersonAvatar = () => {
    return (
        <ListItemAvatar>
            <Avatar>
                <PersonIcon />
            </Avatar>
        </ListItemAvatar>
    )
}

export default PersonAvatar
