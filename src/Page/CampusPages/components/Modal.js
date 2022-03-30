import React from "react";
// AiOutlineClose
import { AiOutlineClose } from "react-icons/ai";

function Modal({ clickedImg, setClickedImg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
}

export default Modal;
