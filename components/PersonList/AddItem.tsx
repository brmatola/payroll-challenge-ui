import { ListItem, IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import React, { useState } from "react";

type AddItemProps = {
    onAdd: (name: string) => void;
}

export default function AddItem({ onAdd }: AddItemProps) {
    const [name, setName] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onAddWithName = () => {
        onAdd(name)
    }

    return (
        <ListItem secondaryAction={
                <IconButton edge="end" aria-label="add" onClick={onAddWithName}>
                    <AddIcon />
                </IconButton>
            }>
                <TextField variant="outlined" value={name} onChange={handleChange}/>
        </ListItem>
    )
}
