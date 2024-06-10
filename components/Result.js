import React from "react";
import Names from "./Names";

export default function Result(props) {
  return (
    <div className="card text-center">
      <div className="card-header bg-dark text-white">Search Results</div>
      <div className="card-body">
        <h5 className="card-title">Match Found for: {props.totalMatch}</h5>
        {props.result.length > 0 ? (props.result.map((res, i) => {
            return (<Names name={res.username} key={i}/>);
        })) : <h1>No Results Found</h1>}
      </div>
    </div>
  );
}
