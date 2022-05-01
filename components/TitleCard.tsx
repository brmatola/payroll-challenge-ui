import { Paper, Typography } from "@mui/material";

export default function TitleCard({text}: {text: string}) {
    return (
        <Paper sx={{height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h2">{text}</Typography>
        </Paper>
    )
}