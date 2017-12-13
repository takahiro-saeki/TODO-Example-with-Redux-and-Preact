import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD action', () => {
    expect(actions.addTodo('Sample Text', 'uuid1234')).toEqual({
      type: types.ADD,
      id: 'uuid1234',
      text: 'Sample Text',
      completed: false
    })
  })
  
  it('deleteTodo should create ADD action', () => {
    expect(actions.deleteTodo({text: 'sample', id: '12qw', completed: false})).toEqual({
      type: types.DELETE,
      data: {
        text: 'sample', 
        id: '12qw', 
        completed: false
      }
    })
  })
  
  it('toggleTodo should create ADD action', () => {
    expect(actions.toggleTodo({text: 'toggle', id: '12qw', completed: false})).toEqual({
      type: types.TOGGLE,
      data: {
        text: 'toggle', 
        id: '12qw', 
        completed: false
      }
    })
  })
  
  it('handleToggleAll should create ADD action', () => {
    expect(actions.handleToggleAll(false)).toEqual({
      type: types.TOGGLE_ALL,
      flag: false
    })
    
    expect(actions.handleToggleAll(true)).toEqual({
      type: types.TOGGLE_ALL,
      flag: true
    })
  })
  
  it('clearTodo should create ADD action', () => {
    expect(actions.clearTodo()).toEqual({
      type: types.CLEAR_TODO
    })
  })
  
  it('editTodo should create ADD action', () => {
    expect(actions.editTodo('1jfi', 'edit sample text')).toEqual({
      type: types.EDIT_TODO,
      id: '1jfi', 
      text: 'edit sample text'
    })
  })
})