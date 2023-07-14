import { useContext } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TodosContext } from '../context/todos';
import { filterActions } from '../reducers/todos';

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop != 'selected',
})(({ selected, theme }) => ({
  color: selected ? theme.palette.primary : theme.palette.text.primary,
  fontWeight: selected ? 500 : 400,
}));

function TodoFilters() {
  const { filter, showAll, showActive, showCompleted } = useContext(TodosContext);

  return (
    <ButtonGroup
      sx={{
        '& .MuiButtonGroup-grouped:not(:last-of-type)': {
          borderRight: 0,
        },
        ml: 0.5,
      }}
      variant="text"
    >
      <StyledButton onClick={showAll} selected={filter === filterActions.ALL}>All</StyledButton>
      <StyledButton onClick={showActive} selected={filter === filterActions.ACTIVE}>Outstanding</StyledButton>
      <StyledButton onClick={showCompleted} selected={filter === filterActions.COMPLETED}>Completed</StyledButton>
    </ButtonGroup>
  );
}

export default TodoFilters;
