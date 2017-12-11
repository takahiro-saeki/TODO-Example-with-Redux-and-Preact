import { h } from "preact";

const FooterItem = ({data, filterChange}) => (
  <li>
    <a 
      href={`#/${data.type}`} 
      className={data.isSelected ? 'selected' : null}
      onClick={() => filterChange(data.type.toUpperCase())}
    >
      {data.type}
    </a>
  </li>
);

export default FooterItem;
