import { h } from "preact";

const Todo = () => (
  <section style="display: block;" class="main">
    <input class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list" />
  </section>
);
export default Todo;
