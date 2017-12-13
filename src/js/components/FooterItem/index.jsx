import { h } from 'preact';

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

export default FooterItem;
