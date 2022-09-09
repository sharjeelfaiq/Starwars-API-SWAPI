import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="mb-5">
        <h2>Navigation Links</h2>
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link class="nav-link" to="/films">
              Films
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/people">
              People
            </Link>{" "}
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/planets">
              Planets
            </Link>{" "}
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/species">
              Species
            </Link>{" "}
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/starships">
              Starships
            </Link>{" "}
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/vehicles">
              Vehicles
            </Link>{" "}
          </li>
        </ul>
        <hr />
      </div>
      <div className="my-3">
        <h1>SWAPI Demo Site</h1>
        <p>
          All the Star Wars data you've ever wanted:
          <br />
          <b>Planets</b>, <b>Spaceships</b>, <b>Vehicles</b>, <b>People</b>, <b>Films</b> and <b>Species</b>
          <br />
          From all SEVEN Star Wars films
          <br />
          Now with The Force Awakens data!
        </p>
        <p>
          Navigate to different pages of this "React SWAPI" site to see what
          kind of data does SWAPI(<em>Starwars API</em>) provides you.
        </p>
      </div>
    </>
  );
}
