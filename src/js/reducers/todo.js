import defaultData from '../defaultData';
import storage from '../domain/storage';

export default function todos(state = defaultData, action) {
  switch (action.type) {
    case 'ADD': {
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: action.completed
      };
      const newState = [...state, newTodo];
      storage.store(newState);
      return newState;
    }
    case 'DELETE': {
      const sortData = state.filter(item => item.id !== action.data.id);
      storage.store(sortData);
      return sortData;
    }
    case 'TOGGLE': {
      const toggleData = state.map(item => {
        if (item.id === action.data.id) {
          const data = {
            ...item,
            completed: !item.completed
          };
          return data;
        }
        return item;
      });
      storage.store(toggleData);
      return toggleData;
    }
    case 'TOGGLE_ALL': {
      const optimize = state.map(item => {
        const param = {
          ...item,
          completed: action.flag
        };
        return param;
      });
      storage.store(optimize);
      return optimize;
    }
    case 'CLEAR_TODO': {
      const optimize = state.filter(item => item.completed === false);
      storage.store(optimize);
      return optimize;
    }
    case 'EDIT_TODO': {
      const optimize = state.map(item => {
        if (action.id === item.id) {
          const param = {
            ...item,
            text: action.text
          };
          return param;
        }
        return item;
      });
      storage.store(optimize);
      return optimize;
    }
    default:
      return state;
  }
}
