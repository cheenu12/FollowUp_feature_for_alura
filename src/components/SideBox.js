import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
const element2 = (
  <FontAwesomeIcon icon={faCircleInfo} style={{ color: "blue" }} />
);
const SideBox = (props) => {
  return (
    <>
      <div className={props.name}>
        <a className="boxContant"> {props.des}</a>{" "}
        <a className="info"> {element2}</a>
        <br />
        <a className="boxContant2"> {props.num}</a>
      </div>
    </>
  );
};

export default SideBox;
