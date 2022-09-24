import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Classes from "./second.module.css";
import forbesIcon from "../figma/forbes.png";
import netflixIcon from "../figma/netflix.png";
import amazonIcon from "../figma/amazon.png";
import sejIcon from "../figma/sej.png";
import entrepreneurIcon from "../figma/entrepreneur.png";
import discIcon from "../figma/disc.png";
import searchIcon from "../figma/search.png";
import penIcon from "../figma/pen.png";

export default function Second() {
  return (
    <>
      <h1>Our work featured on</h1>
      <div className={Classes.secondBrands}>
        <img src={forbesIcon} alt="" height="60px" />
        <img src={netflixIcon} alt="" height="40px" />
        <img src={amazonIcon} alt="" height="40px" />
        <img src={sejIcon} alt="" />
        <img src={entrepreneurIcon} alt="" />
      </div>
      <Row className={Classes.secondRow}>
        <Col lg={5} className={Classes.left}>
          <h4>HOW PAGETRAFFIC CREATES HYPER BUSINESS GROWTH</h4>
          <p>
            PageTraffic offers top-notch SEO and digital marketing solutions to
            help you rank high on search results, connect with.
          </p>
          <div>
            <p>
              <img src={discIcon} alt="" />
              PageTraffic offers top-notch SEO and digital
            </p>
            <p>
              <img src={discIcon} alt="" />
              PageTraffic offers top-notch SEO.
            </p>
            <p>
              <img src={discIcon} alt="" />
              PageTraffic offers top-notch.
            </p>
            <p>
              <img src={discIcon} alt="" />
              PageTraffic offers top-notch SEO and.
            </p>
          </div>
          <div className={Classes.stats}>
            <div>
              <span className="text-info">1.9K</span>
              <p>Total audience</p>
            </div>
            <div>
              <span className="text-danger">5.7K</span>
              <p>Complete Project</p>
            </div>
          </div>
          <Button className={Classes.exploreBtn} variant="info">
            Explore now
          </Button>
        </Col>
        <Col xl={4} lg={5} className={Classes.right}>
          <div>
            <div className={Classes.pen}>
              <img src={penIcon} alt="" />
              <h5>I Want Leads</h5>
              <p>Looking to get higher ROI by improving website.</p>
              <span>View more</span>
            </div>
            <div className={Classes.pen}>
              <img src={penIcon} alt="" />
              <h5>I Want Leads</h5>
              <p>Looking to get higher ROI by improving website.</p>
              <span>View more</span>
            </div>
          </div>
          <div className={Classes.blueContainer}>
            <div className={Classes.search}>
              <img src={searchIcon} alt="" />
              <h5>I Want Leads</h5>
              <p>Looking to get higher ROI by improving website.</p>
              <span>View more</span>
            </div>
            <div className={Classes.search}>
              <img src={searchIcon} alt="" />
              <h5>I Want Leads</h5>
              <p>Looking to get higher ROI by improving website.</p>
              <span>View more</span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
