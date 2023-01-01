import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
    <NavbarBs className="bg-white shadow-sm mb-3">
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                    Shop
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
                <Nav.Link to="/cart" as={NavLink}>
                    Cart
                </Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
    );
}