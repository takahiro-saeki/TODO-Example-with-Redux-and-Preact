import { h } from 'preact';

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

export default TodoItem;
