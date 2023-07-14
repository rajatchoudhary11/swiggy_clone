import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUserTag } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{boxShadow:" 1px 2px 9px"}}>
      <Navbar.Brand
        href="#home"
        className="ms-5"
        style={{ width: "40px", height: "60px" }}
      >
        <img
          src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png"
          alt="logoswiggy"
          width="35px"
          className="slogo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-decoration-underline tab">
          <NavDropdown title="Other" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <input type="text" placeholder="Search for an area" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another Location
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-0" className="mx-4 tab">
              {" "}
              <FontAwesomeIcon icon={faSearch} className="mx-2" /> Search
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="mx-4 tab">
              {" "}
              <FontAwesomeIcon icon={faPercent} className="mx-2" /> Offer
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="mx-4 tab">
              {" "}
              <FontAwesomeIcon icon={faBriefcase} className="mx-2" /> Help
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" className="mx-4 tab">
              <FontAwesomeIcon icon={faUserTag} className="mx-2" /> Signin
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" className="ms-4 me-5 tab">
              <FontAwesomeIcon icon={faShoppingCart} className="mx-2" /> Cart
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
