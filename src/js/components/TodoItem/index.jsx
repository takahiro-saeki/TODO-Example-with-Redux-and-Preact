import { h } from 'preact';
import { bindActionCreators } from 'redux'
import { connect } from 'preact-redux'
import * as actions from '../../actions';

const TodoItem = ({data, deleteTodo, toggleTodo}) => (
  <li id={data.id} className={data.completed ? 'completed' : null }>
    <input 
      className="toggle" 
      type="checkbox" 
      onClick={() => toggleTodo(data)} 
      checked={data.completed}
    />
    <label>{data.text}</label>
    <button className="destroy" onClick={() => deleteTodo(data)} />
  </li>
);

const mapStateToProps = state => ({
  todo: state.todo
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
