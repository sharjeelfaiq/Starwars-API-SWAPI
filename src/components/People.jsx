import React from "react";

export default function People(props) {
  return (
    <>
      <h1 className="text-center my-5">People</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.results.map((result) => {
          return (
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Height: {result.height}</li>
                    <li className="list-group-item">Mass: {result.mass}</li>
                    <li className="list-group-item">Gender: {result.gender}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
