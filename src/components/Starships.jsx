import React from "react";

export default function Starships(props) {
  return (
    <>
      <h1 className="text-center my-5">Starships</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.results.map((result) => {
          return (
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Model: {result.model}</li>
                    <li className="list-group-item">
                      Manufacturer: {result.manufacturer}
                    </li>
                    <li className="list-group-item">
                      Passengers: {result.passengers}
                    </li>
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
