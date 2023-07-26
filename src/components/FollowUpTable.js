import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import Customer from "../components/customers";
const element2 = <FontAwesomeIcon icon={faSort} style={{ color: "#000000" }} />;
const element = (
  <FontAwesomeIcon icon={faChevronDown} style={{ color: "#000000" }} />
);

const FollowUpTable = () => {
  return (
    <>
      <div className="FollowUpTable">
        <h1 className=" followUp"> Follow up </h1>
        <h2 className=" filter"> Filter: </h2>
        <h2 className="sendnow">Send now (176) {element} </h2>

        <div>
          <hr className="hrtag" />
          <div className="tableatt">
            <h2 className="heading1 headde"> CUSTOMER {element2}</h2>

            <h2 className="heading2 headde"> ORDER ID {element2} </h2>

            <h2 className="heading3 headde"> DATE {element2}</h2>
            <h2 className="heading4 headde"> REVIEW {element2}</h2>
            <h2 className="heading5 headde"> STATUS {element2}</h2>
          </div>
          <hr className="hrtag2" />
          <Customer
            name="Maria"
            orderId="#4324543"
            date=" Aug 05 2022"
            review="NONE"
            status=" No Signal"
          />
          <br />
          <Customer
            name="Chirag"
            orderId="#4233324"
            date="Mar 21 2021"
            review="NONE"
            status=" No Signal"
          />
          <br />
          <Customer
            name="Avtar Singh"
            orderId="#5627834"
            date="Sept 02 2018"
            review="NONE"
            status="No Signal"
          />
        </div>
      </div>
    </>
  );
};

export default FollowUpTable;
