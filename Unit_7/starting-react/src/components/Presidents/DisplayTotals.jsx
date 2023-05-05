import React from "react";

function DisplayTotals(props) {
  return (
    <React.Fragment>
      <p>
        {props.name} had a total vote count of {props.count}
      </p>
    </React.Fragment>
  );
}

export default DisplayTotals;
