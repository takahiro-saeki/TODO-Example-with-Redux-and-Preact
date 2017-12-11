import { combineReducers } from 'redux';
import todo from './todo';
import todoFilter from './todoFilter';

const rootReducer = combineReducers({
  todo,
  todoFilter
});

export default rootReducer;
