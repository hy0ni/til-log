import { Link } from "react-router-dom";
function Header() {
  return (
    <h1>
      <Link to="/" style={{ fontSize: "20px", textDecoration: "none" }}>
        Home
      </Link>
    </h1>
  );
}

export default Header;
