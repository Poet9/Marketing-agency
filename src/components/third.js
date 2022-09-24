import React from "react";
import Classes from "./third.module.css";
import rightCheveronIcon from "../figma/chevron-right.svg";
import leftCheveronIcon from "../figma/chevron-left.svg";
import starIcon from "../figma/star.svg";

export default function Third() {
  return (
    <div className={Classes.thirdMain}>
      <div className={Classes.text}>
        <h3>Case study</h3>
        <h1>OUR CLIENT GETS RESULTS</h1>
        <p>PageTraffic offers top-notch SEO and digital marketing solutions.</p>
      </div>
      <div>
        <div className={Classes.cheveron}>
          <img src={leftCheveronIcon} alt="" />
          <img src={rightCheveronIcon} alt="" />
        </div>
        <div className={Classes.peopleContainer}>
          <div className={Classes.people + " " + Classes.first}>
            <p>name thing</p>
            <span>
              <img src={starIcon} alt="" width="9px" /> 4.7
            </span>
          </div>
          <div className={Classes.people + " " + Classes.second}>
            <p>name thing</p>
            <span>
              <img src={starIcon} alt="" width="9px" /> 4.7
            </span>
          </div>
          <div className={Classes.people + " " + Classes.third}>
            <p>name thing</p>
            <span>
              <img src={starIcon} alt="" width="9px" /> 4.7
            </span>
          </div>
          <div className={Classes.people + " " + Classes.fourth}>
            <p>name thing</p>
            <span>
              <img src={starIcon} alt="" width="9px" /> 4.7
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
