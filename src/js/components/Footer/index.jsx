import { h } from 'preact';
import FooterItem from '../FooterItem';

const Footer = ({todoFilter, filterChange, currentType, data}) => (
  <footer class="footer">
    <span class="todo-count">{data.length} items left </span>
    <div class="filters">
      {todoFilter.map(item => (
        <FooterItem 
          data={item} 
          filterChange={filterChange} 
          currentType={currentType} 
        />
      ))}
    </div>
    <button class="clear-completed" style="display: none;">Clear completed</button>
  </footer>
);

Footer.defaultProps = {
  data: []
}

export default Footer

