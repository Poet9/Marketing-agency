import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container, Nav, Card, Col } from "react-bootstrap";
import Home from "./components/home";
import fbIcon from "./figma/facebook.svg";
import liIcon from "./figma/linkedin.svg";
import ytIcon from "./figma/youtube.svg";
import twIcon from "./figma/twitter.svg";
import footerIcon1 from "./figma/footer1.png";
import footerIcon2 from "./figma/footer2.png";

function App() {
  return (
    <div className="App">
      <Navbar className="navBar-style" variant="light" expand="lg">
        <Container fluid>
          <Col className="brandContainer">
            <Navbar.Brand href="#home" className="brandName">
              DeMo.
            </Navbar.Brand>
          </Col>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Col>
              <Nav
                variant="tabs"
                className="me-auto justify-content-end"
                defaultActiveKey="#home"
              >
                <Nav.Link href="#home">Services</Nav.Link>
                <Nav.Link href="#packages" eventKey="#packages">
                  Packages
                </Nav.Link>
                <Nav.Link href="#who" eventKey="#who">
                  Who we are
                </Nav.Link>
                <Nav.Link href="#portfolio" eventKey="#portfolio">
                  Our portfolio
                </Nav.Link>
                <Nav.Link href="#about" eventKey="#about">
                  About us
                </Nav.Link>
                <button className="contactButton">Contacts</button>
              </Nav>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Home />
      <footer>
        <p className="brandName">DeMo.</p>
        <div className="main">
          <div className="left">
            <p>
              FindBestSEO has ranked PageTraffic among the top 10 SEO companies
              for 2020.
            </p>
            <div>
              <img src={fbIcon} alt="" />
              <img src={liIcon} alt="" />
              <img src={twIcon} alt="" />
              <img src={ytIcon} alt="" />
            </div>
          </div>
          <div className="middle">
            <p>COMPANY</p>
            <span>About</span>
            <span>Services</span>
            <span>Press</span>
            <span>Resources</span>
            <span>Blog</span>
          </div>
          <div className="right">
            <p>LATEST NEWS</p>
            <Card className="card">
              <Card.Img variant="top" className="cardImg" src={footerIcon1} />
              <Card.Body className="cardBody">
                <Card.Title>Per Click Management</Card.Title>
                <Card.Text>
                  PageTraffic is a premier Search Engine Marketing ( SEM).
                </Card.Text>
                <div>
                  <span></span> 15 April 2021
                </div>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img variant="top" className="cardImg" src={footerIcon2} />
              <Card.Body className="cardBody">
                <Card.Title>Per Click Management</Card.Title>
                <Card.Text>
                  PageTraffic is a premier Search Engine Marketing ( SEM).
                </Card.Text>
                <div>
                  <span></span> 15 April 2021
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="copyright">
          <p>© 2021 DeMO Insurance Inc. Patent Pending. All Rights Reserved.</p>
          <p>
            <span>privacy</span> | Terms of service
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
