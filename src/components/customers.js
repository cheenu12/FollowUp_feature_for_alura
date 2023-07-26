const Customer = (props) => {
  return (
    <>
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <div className=" data">
        <h3 className="heading1 tabledata"> {props.name}</h3>
        <h3 className="heading2 tabledata">{props.orderId}</h3>
        <h3 className="heading3 tabledata">{props.date}</h3>
        <h3 className="heading4 tabledata">{props.review}</h3>
        <h3 className="heading5 tabledata">{props.status}</h3>
      </div>
    </>
  );
};
export default Customer;
