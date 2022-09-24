import React from "react";
import { Col, Row } from "react-bootstrap";
import Classes from "./home.module.css";
import img from "../figma/H1Container.png";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";

export default function Home() {
  return (
    <div className={Classes.main}>
      <Row style={{ marginBottom: "50px" }}>
        <Col lg={8} className={Classes.mainLeft}>
          <h1 className="display-1">
            BEST <span className={Classes.colorDanger}>MARKETING</span> COMPANY.
          </h1>
          <h3>#1 MARKETING Services Agency in USA & UK</h3>
          <p>
            If you're looking for the best SEO company for your business,
            PageTraffic is the perfect choice.
          </p>
          <div className={Classes.bottomLeft}>
            <button className="contactButton">Get started</button>
            <div className={Classes.youtubeContainer}>
              <div className={Classes.youtubeButton}></div>
            </div>
            <p>Watch now</p>
          </div>
        </Col>
        <Col lg={4}>
          <img src={img} alt="" className={Classes.imgStyle} />
        </Col>
      </Row>
      <Second />
      <Third />
      <Fourth />
    </div>
  );
}
