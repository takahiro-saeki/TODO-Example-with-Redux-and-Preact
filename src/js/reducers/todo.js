import defaultData from '../defaultData';

export default function todos(state = defaultData, action) {
  switch (action.type) {
    case 'ADD': {
      console.log(action)
      return state
    }
  default:
    return state;
  }
}
