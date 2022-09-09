import React from "react";

export default function Species(props) {
  return (
    <>
      <h1 className="text-center my-5">Species</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.results.map((result) => {
          return (
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Classification: {result.classification}
                    </li>
                    <li className="list-group-item">
                      Language: {result.language}
                    </li>
                    <li className="list-group-item">
                      Designation: {result.designation}
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
