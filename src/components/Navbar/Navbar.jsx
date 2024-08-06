import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import themeContext from "../../context/themeContext";
import { useContext } from "react";
import languageContext from "../../context/languageContext";

function NavScrollExample({ NavbarTitle = "MusicApp" }) {
  const { darkMode, setDarkMode } = useContext(themeContext);
  const {language, setLanguage} = useContext(languageContext)

  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme={darkMode ? "dark" : "light"}
    >
      <Container fluid>
        <Navbar.Brand href="/">{NavbarTitle ?? "MusicApp"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/favorites"}>
              Favorites
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <svg style={{width: "20px", height: "20px", marginLeft: "10px", transform: `rotateZ(${darkMode ? "180deg" : "0deg"})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={()=>setDarkMode(!darkMode)}>
          <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
        </svg>
        <span style={{cursor: "pointer"}} className="p-2 mx-3" onClick={()=>setLanguage(language === "en" ? "ar" : "en")}>{language}</span>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
