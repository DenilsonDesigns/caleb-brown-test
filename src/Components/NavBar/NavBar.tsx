import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (): JSX.Element => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Caleb & Brown</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/main-view">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/trending">Trending</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/news">News</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
