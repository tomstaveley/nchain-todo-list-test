import keyMirror from 'keymirror';

export const itemActions = keyMirror({
  'ADD_ITEM': null,
  'CHECK_ITEM': null,
  'DELETE_ITEM': null,
});

export const itemsReducer = (state, action) => {
  switch (action.type) {
    case itemActions.ADD_ITEM:
      return [
        ...state,
        action.item,
      ];
    
    case itemActions.CHECK_ITEM: {
      return state.map((item) => item.id === action.id
        ? { ...item, completed: !item.completed }
        : item
      );
    }

    case itemActions.DELETE_ITEM:
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
};

export const filterActions = keyMirror({
  'ALL': null,
  'ACTIVE': null,
  'COMPLETED': null,
});

export const filterReducer = (state, action) => action.type;
