import todo from './todo'
import * as types from '../constants/ActionTypes'
import defaultData from '../defaultData';

describe('todo reducer', () => {
  it('initial state is', () => {
    expect(todo(undefined, {})).toEqual(defaultData)
  })

  it('ADD is', () => {
    expect(todo([], {
      type: types.ADD,
      text: 'add todo!',
      id: 'someid123',
      completed: false
    })).toEqual([
      {
        text: 'add todo!',
        completed: false,
        id: 'someid123',
        completed: false
      }
    ])
  })
})