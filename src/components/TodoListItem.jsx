import { useContext } from 'react';
import { ItemProp } from '../propTypes';
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { TodosContext } from '../context/todos';



function TodoListItem({ item }) {
  const { id, text, completed } = item;
  const { checkItem, deleteItem } = useContext(TodosContext);

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" onClick={() => deleteItem(id)}>
          <ClearIcon />
        </IconButton>
      }
    >
      <ListItemButton onClick={() => checkItem(id)}>
        <ListItemIcon>
          <Checkbox
            disableRipple
            checked={completed}
            edge="start"
            tabIndex={-1}
          />
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            color: item.completed ? 'text.disabled' : 'text.primary',
            textDecoration: item.completed ? 'line-through' : 'none',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

TodoListItem.propTypes = {
  item: ItemProp.isRequired,
};

export default TodoListItem;
