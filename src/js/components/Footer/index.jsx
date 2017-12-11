import { h } from 'preact';
import FooterItem from '../FooterItem';

const Footer = ({todoFilter, filterChange}) => (
  <footer class="footer">
    <span class="todo-count">items left</span>
    <div class="filters">
      {todoFilter.map(item => <FooterItem data={item} filterChange={filterChange} />)}
    </div>
    <button class="clear-completed" style="display: none;">Clear completed</button>
  </footer>
);

export default Footer

