import { v4 as uuid } from 'uuid';
import { useContext, useRef, useState } from 'react';
import { Box, Button, Paper, TextField } from '@mui/material';
import { TodosContext } from '../context/todos';

function AddTodo() {
  const inputRef = useRef();
  const [value, setValue] = useState('');
  const { addItem } = useContext(TodosContext);

  const submitItem = () => {
    if (value !== '') {
      addItem({
        id: uuid(),
        text: value,
        completed: false,
      });
      setValue('');
      inputRef.current.focus();
    }
  };

  const handleChange = (e) => setValue(e.target.value);
  const handleKeyPress = (e) => e.key === 'Enter' && submitItem();
  const handleClick = () => submitItem();

  return (
    <Paper sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          }
        }}
      >
        <TextField
          autoFocus
          fullWidth
          inputRef={inputRef}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="New task"
          value={value}
          variant="standard"
        />
        <Button
          disabled={!value}
          onClick={handleClick}
          sx={{
            flexShrink: 0,
            ml: {
              xs: 0,
              sm: 4,
            },
            mt: {
              xs: 2,
              sm: 0,
            },
          }}
          type="submit"
          variant="contained"
        >
          Add task
        </Button>
      </Box>
    </Paper>
  );
}

export default AddTodo;
