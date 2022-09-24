import { Button, Navbar, Nav, Card, Container } from "react-bootstrap";
import React from "react";
import Classes from "./fourth.module.css";
import pic41 from "../figma/41.png";
import pic42 from "../figma/42.png";
import pic43 from "../figma/43.png";
import pic44 from "../figma/44.png";
import pic45 from "../figma/45.png";
import pic46 from "../figma/46.png";
import card1Icon from "../figma/card1.png";
import card2Icon from "../figma/card2.png";
import card3Icon from "../figma/card3.png";
import card4Icon from "../figma/card4.png";
import blueArrowIcon from "../figma/arrow-right.svg";
import redArrowIcon from "../figma/arrow-right-red.png";
import rightCheveronIcon from "../figma/chevron-right.svg";
import leftCheveronIcon from "../figma/chevron-left.svg";

export default function Fourth() {
  let prevTargetId = "ui_ux";
  const navFunc = (e) => {
    if (!e.target.href || e.target.id === prevTargetId) return;
    document.getElementById(prevTargetId).style.borderBottom = "none";
    prevTargetId = e.target.id;
    e.target.style.borderBottom = "2px solid #d82323";
  };
  return (
    <div className={Classes.fourthMain}>
      <h2>Our portfolio</h2>

      <Navbar variant="light">
        <Container className={Classes.nav}>
          <Nav onClick={navFunc}>
            <Nav.Link id="all" href="#ALL">
              All
            </Nav.Link>
            <Nav.Link id="web_design" href="#WD">
              Website design
            </Nav.Link>
            <Nav.Link id="mobile_app" href="#MA">
              Mobile App
            </Nav.Link>
            <Nav.Link id="design_branding" href="#DB">
              Design branding
            </Nav.Link>
            <Nav.Link
              id="ui_ux"
              style={{ borderBottom: "2px solid #d82323" }}
              href="#UI"
            >
              UI/UX
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className={Classes.examples}>
        <img src={pic41} alt="" />
        <img src={pic42} alt="" />
        <img src={pic43} alt="" />
        <img src={pic44} alt="" />
        <img src={pic45} alt="" />
        <img src={pic46} alt="" />
      </div>
      <Button variant="info" className={Classes.btn}>
        View more
      </Button>
      <h2>See our blogs</h2>
      <div className={Classes.cheveron}>
        <img src={leftCheveronIcon} alt="" />
        <img src={rightCheveronIcon} alt="" />
      </div>
      <div className={Classes.cardContainer}>
        <Card className={Classes.card} style={{ backgroundColor: "#E71D360a" }}>
          <Card.Img
            variant="top"
            className={Classes.cardImg + " " + Classes.cardImgRed}
            src={card1Icon}
          />
          <Card.Body className={Classes.cardBody}>
            <span>19 Feb, 2022/ By Admin</span>
            <Card.Title>UI/UX design Tips</Card.Title>
            <Card.Text>
              Promotion World has once placed PageTraffic among the top.
            </Card.Text>
            <div style={{ color: "#E71D36" }}>
              View more <img src={redArrowIcon} alt="" />
            </div>
          </Card.Body>
        </Card>
        <Card className={Classes.card} style={{ backgroundColor: "#2EC4B60a" }}>
          <Card.Img
            variant="top"
            className={Classes.cardImg + " " + Classes.cardImgBlue}
            src={card2Icon}
          />
          <Card.Body className={Classes.cardBody}>
            <span>19 Feb, 2022/ By Admin</span>
            <Card.Title>Improve your UX/UI</Card.Title>
            <Card.Text>
              Promotion World has once placed PageTraffic among the top.
            </Card.Text>
            <div style={{ color: "#2EC4B6" }}>
              View more <img src={blueArrowIcon} alt="" />
            </div>
          </Card.Body>
        </Card>
        <Card className={Classes.card} style={{ backgroundColor: "#2EC4B60a" }}>
          <Card.Img
            variant="top"
            className={Classes.cardImg + " " + Classes.cardImgBlue}
            src={card3Icon}
          />
          <Card.Body className={Classes.cardBody}>
            <span>19 Feb, 2022/ By Admin</span>
            <Card.Title>Meta Technology.</Card.Title>
            <Card.Text>
              Promotion World has once placed PageTraffic among the top.
            </Card.Text>
            <div style={{ color: "#2EC4B6" }}>
              View more <img src={blueArrowIcon} alt="" />
            </div>
          </Card.Body>
        </Card>
        <Card className={Classes.card} style={{ backgroundColor: "#E71D360a" }}>
          <Card.Img
            variant="top"
            className={Classes.cardImg + " " + Classes.cardImgRed}
            src={card4Icon}
          />
          <Card.Body className={Classes.cardBody}>
            <span>19 Feb, 2022/ By Admin</span>
            <Card.Title>PageTraffic Ranks</Card.Title>
            <Card.Text>
              Promotion World has once placed PageTraffic among the top.
            </Card.Text>
            <div style={{ color: "#E71D36" }}>
              View more <img src={redArrowIcon} alt="" />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
