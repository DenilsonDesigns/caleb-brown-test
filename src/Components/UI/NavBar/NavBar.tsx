import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";

const NavBar = (): JSX.Element => {
  return (
    <div>
      <Navbar expand="md" style={{ backgroundColor: "#343a40" }}>
        <Link className="text-light navbar-main" to="/main-view">
          Caleb & Brown
        </Link>
        <Link className="text-light navbar-secondary" to="/main-view">
          Dashboard
        </Link>
        <Link className="text-light navbar-secondary" to="/trending">
          Trending
        </Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
