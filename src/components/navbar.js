import ReactDOM from "react-dom";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const element2 = (
  <FontAwesomeIcon
    className="icon1"
    icon={faCompactDisc}
    spin
    style={{ color: "white" }}
  />
);
const element3 = (
  <FontAwesomeIcon
    className="navbutton3"
    icon={faHouseChimney}
    style={{ color: "white" }}
  />
);

const element4 = (
  <FontAwesomeIcon
    className="navbutton"
    icon={faLayerGroup}
    style={{ color: "white" }}
  />
);
const element5 = (
  <FontAwesomeIcon
    className="navbutton"
    icon={faMagnifyingGlass}
    style={{ color: "white" }}
  />
);
const element6 = (
  <FontAwesomeIcon
    className="navbutton"
    icon={faChartSimple}
    style={{ color: "white" }}
  />
);
const element7 = (
  <FontAwesomeIcon
    className="navbutton"
    icon={faComment}
    style={{ color: "white" }}
  />
);
const element8 = (
  <FontAwesomeIcon
    className="navbutton"
    icon={faUserGroup}
    style={{ color: "white" }}
  />
);

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navchild">
          <button className="trans ">{element2}</button>
          <button className="trans ">{element3}</button>
          <button className="trans ">{element4}</button>
          <button className="trans ">{element5}</button>
          <button className="trans ">{element6}</button>
          <button className="trans ">{element7}</button>
          <button className="trans ">{element8}</button>
          <button className="navST"> Settings</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
