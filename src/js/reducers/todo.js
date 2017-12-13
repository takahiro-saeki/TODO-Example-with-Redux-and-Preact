import defaultData from '../defaultData';

export default function todos(state = defaultData, action) {
  switch (action.type) {
    case 'ADD': {
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: action.completed
      }
      const newState = [
        ...state,
        newTodo
      ]
      return newState
    }
    case 'DELETE': {
      const sortData = state.filter(item => item.id !== action.data.id)
      return sortData
    }
    case 'TOGGLE': {
      const toggleData = state.map(item => {
        if(item.id === action.data.id) {
          const data = {
            ...item,
            completed: !item.completed
          }
          return data;
        }
        return item
      })
      return toggleData;
    }
    case 'TOGGLE_ALL': {
      const optimize = state.map(item => {
        const param = {
          ...item,
          completed: action.flag
        }
        return param;
      })
      return optimize;
    }
    case 'CLEAR_TODO': {
      const optimize = state.filter(item => item.completed === false)
      return optimize
    }
  default:
    return state;
  }
}
