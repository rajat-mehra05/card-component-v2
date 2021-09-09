import { useState } from "react";

const Card = ({ type, header, children, footer }) => {
  const [currDate, setCurrDate] = useState("");

  const btnHandler = () => {
    let d = new Date();
    let c = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    return footer === true ? setCurrDate(c) : "";
  };

  return (
    <>
      <div className={`${type}--header`}>{header}</div>
      <br />
      <button onClick={btnHandler}> Check </button>
      <div className={`${type}--body`}> {children} </div>
      <footer> {currDate} </footer>
    </>
  );
};

export default Card;
