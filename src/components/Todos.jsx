import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodosContextProvider from '../context/todos';
import { ItemsProp } from '../propTypes';

function Todos({ items }) {
  return (
    <TodosContextProvider initialItems={items}>
      <AddTodo />
      <TodoList />
    </TodosContextProvider>
  );
}

Todos.propTypes = {
  items: ItemsProp,
};

export default Todos;
