import React from "react";

export default function Films(props) {
  return (
    <>
    <h1 className="text-center my-5">Films</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.results.map((result) => {
          return (
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{result.title}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Director: {result.director}</li>
                    <li className="list-group-item">Producer: {result.producer}</li>
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
