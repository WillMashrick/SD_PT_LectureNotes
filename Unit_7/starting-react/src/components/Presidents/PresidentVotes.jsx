import React from "react";
import DisplayTotals from "./DisplayTotals";

function PresidentVotes() {
  const votes = [
    { name: "Abe Lincoln", count: 139033 },
    { name: "Stephen Douglas", count: 115509 },
  ];

  return (
    <React.Fragment>
      <h1>Presidents</h1>
      {votes.map((record, index) => (
        <DisplayTotals
          id={record.index}
          name={record.name}
          count={record.count}
        />
      ))}
    </React.Fragment>
  );
}

export default PresidentVotes;
