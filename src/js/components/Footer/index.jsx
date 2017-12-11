import { h } from 'preact';
import FooterItem from '../FooterItem';

const Footer = () => (
  <footer class="footer">
    <span class="todo-count">items left</span>
    <div class="filters">
      <FooterItem />
    </div>
    <button class="clear-completed" style="display: none;">Clear completed</button>
  </footer>
);

export default Footer;
