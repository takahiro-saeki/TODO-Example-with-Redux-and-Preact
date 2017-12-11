import { h } from "preact";

const Header = ({ title, placeholder }) => (
  <header className="header">
    <h1>{title}</h1>
    <input className="new-todo" placeholder={placeholder} autofocus="" />
  </header>
);

export default Header;
