import { h } from 'preact';
import { func, arrayOf, string, object } from 'prop-types';
import FooterItem from '../FooterItem';

const Footer = ({ todoFilter, filterChange, currentType, data, clearTodo }) => (
  <footer
    className="footer"
    style={{
      display: data.length === 0 ? 'none' : 'block'
    }}
  >
    <span className="todo-count">
      {data.filter(item => item.completed === false).length} items left{' '}
    </span>
    <div className="filters">
      {todoFilter.map(item => (
        <FooterItem
          data={item}
          filterChange={filterChange}
          currentType={currentType}
        />
      ))}
    </div>
    <button
      className="clear-completed"
      onClick={() => clearTodo()}
      style={{
        display:
          data.filter(item => item.completed === true).length === 0
            ? 'none'
            : 'block'
      }}
    >
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  todoFilter: [],
  filterChange: null,
  currentType: '',
  data: [],
  clearTodo: null
};

Footer.propTypes = {
  todoFilter: arrayOf(object),
  filterChange: func,
  currentType: string,
  data: arrayOf(object),
  clearTodo: func
};

export default Footer;
