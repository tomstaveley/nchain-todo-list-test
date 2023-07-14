import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';
import { ItemsProp } from '../propTypes';
import { itemsReducer, filterReducer, itemActions, filterActions } from '../reducers/todos';

export const TodosContext = createContext();

const TodosContextProvider = ({ children, initialItems = [] }) => {
  const [items, dispatchItems] = useReducer(itemsReducer, initialItems);
  const [filter, dispatchFilter] = useReducer(filterReducer, filterActions.ALL);

  const sortedItems = items.filter(item => {
    switch (filter) {
      case filterActions.ALL:
        return true;
      case filterActions.ACTIVE:
        return !item.completed;
      case filterActions.COMPLETED:
        return item.completed;
      default:
        return false;
    }
  }).sort((a, b) => (b.completed === a.completed) ? 0 : b.completed ? -1 : 1);

  const value = {
    items,
    sortedItems,
    addItem: (item) => dispatchItems({ type: itemActions.ADD_ITEM, item }),
    checkItem: (id) => dispatchItems({ type: itemActions.CHECK_ITEM, id }),
    deleteItem: (id) => dispatchItems({ type: itemActions.DELETE_ITEM, id }),
    filter,
    showAll: () => dispatchFilter({ type: filterActions.ALL }),
    showActive: () => dispatchFilter({ type: filterActions.ACTIVE }),
    showCompleted: () => dispatchFilter({ type: filterActions.COMPLETED }),
  };

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  );
};

TodosContextProvider.propTypes = {
  children: PropTypes.node,
  initialItems: ItemsProp,
};

export default TodosContextProvider;
