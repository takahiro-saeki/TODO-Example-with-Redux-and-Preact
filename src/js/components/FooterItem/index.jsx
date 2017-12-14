import { h } from 'preact';
import { string, func } from 'prop-types';

const FooterItem = ({ data, filterChange, currentType }) => (
  <li>
    <a
      href={`#/${data.type}`}
      className={data.type.toUpperCase() === currentType ? 'selected' : null}
      onClick={() => filterChange(data.type.toUpperCase())}
    >
      {data.type}
    </a>
  </li>
);

FooterItem.defaultProps = {
  data: {
    type: ''
  },
  filterChange: null,
  currentType: ''
};

FooterItem.propTypes = {
  data: {
    type: string
  },
  filterChange: func,
  currentType: string
};

export default FooterItem;
