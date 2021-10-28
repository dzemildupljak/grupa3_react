import React from "react";

const PageButtons = ({ text, handlerFunc, type }) => {
  var backgroundClr = "";

  switch (type) {
    case "danger":
      backgroundClr = "red";
      break;
    case "warning":
      backgroundClr = "yellow";
      break;
    case "default":
      backgroundClr = "blue";
      break;
    default:
      break;
  }
  return (
    <div>
      <button
        onClick={handlerFunc}
        style={{
          backgroundColor: backgroundClr,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default PageButtons;
