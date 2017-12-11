import uuid from 'uuid';

export const addTodo = (text) => ({
  type: 'ADD',
  text,
  id: uuid.v4(),
  completed: false,
})