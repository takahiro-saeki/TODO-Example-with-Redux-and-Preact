import uuid from 'uuid';

export const addTodo = (text) => ({
  type: 'ADD',
  text,
  id: uuid.v4(),
  completed: false,
})

export const deleteTodo = (data) => ({
  type: 'DELETE',
  data
})

export const toggleTodo = (data) => ({
  type: 'TOGGLE',
  data
})

export const handleToggleAll = (flag) => ({
  type: 'TOGGLE_ALL',
  flag
})