// NavbarComponents.js
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponents = () => {
  return (
    <div >
      <Navbar expand="lg" className="navbar-custom" >
        <Container >
          <Navbar.Brand href="#home" className="navbar-brand">Baraya Tailor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="/galeri" className="nav-link">Galeri</Nav.Link>
              <Nav.Link href="/faq" className="nav-link">Faq</Nav.Link>
              <Nav.Link href="/lokasi" className="nav-link">Lokasi</Nav.Link>
              <Nav.Link href="/tentangkami" className="nav-link">Tentang Kami</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
