import { h } from "preact";

const TodoItem = ({data}) => (
  <li id={data.id} className="">
    <input class="toggle" type="checkbox" />
    <label>{data.text}</label>
    <button class="destroy" />
  </li>
);

export default TodoItem;
