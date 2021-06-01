import React from "react";

function Scroll(props) {
  // console.log(props.children);
  return (
    <div
      style={{
        overflow: "scroll",
        border: "2px solid blue",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
