import { List } from "@mui/material"
import PersonItem from "./PersonItem";
import AddItem from "./AddItem";

type PersonListProps = {
    people: { id?: string; name?: string | null | undefined; }[]
    addPerson: (name: string) => void;
    deletePerson: (id?: string) => void;
    onClickDetails: (id?: string) => void;
}

export default function PersonList({ people, addPerson, deletePerson, onClickDetails }: PersonListProps) {
    return (
        <List sx={{width: '60%'}}>
            {people.map(employee => {
                return (
                    <PersonItem
                        key={employee.id}
                        employee={employee} 
                        onClickDetails={onClickDetails}
                        onClickDelete={deletePerson} />
                )
                
            })}
            <AddItem onAdd={addPerson} />
        </List>
            
    )
}