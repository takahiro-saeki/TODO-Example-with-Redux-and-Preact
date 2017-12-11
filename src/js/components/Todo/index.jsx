import { h } from "preact";
import Footer from '../Footer';
import TodoItem from '../TodoItem';

const Todo = ({data}) => (
  <section style="display: block;" class="main">
    <input class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      {data.map(item => <TodoItem data={item} />)}
    </ul>
    <Footer />
  </section>
);
export default Todo;
