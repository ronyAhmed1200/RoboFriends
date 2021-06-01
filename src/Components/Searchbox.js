import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 bg-lightest-blue b--green ba"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
