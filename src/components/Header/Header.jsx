import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
