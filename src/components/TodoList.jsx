import { useContext } from 'react';
import { Box, List, Paper, Typography } from '@mui/material';
import TodoFilters from './TodoFilters';
import TodoListItem from './TodoListItem';
import { TodosContext } from '../context/todos';

function TodoList() {
  const { items, sortedItems } = useContext(TodosContext);

  if (!items.length) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <TodoFilters />
      <Paper>
        <List>
          {sortedItems.map((item) => (
            <TodoListItem key={item.id} item={item} />
          ))}
        </List>
      </Paper>
      <Typography
        sx={{
          fontSize: '0.875rem',
          mt: 1.5,
          px: 2,
        }}>
          Showing {sortedItems.length} tasks
        </Typography>
    </Box>
  );
}

export default TodoList;
