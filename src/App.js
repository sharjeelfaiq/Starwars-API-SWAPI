import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Films from "./components/Films";
import People from "./components/People";
import Planets from "./components/Planets";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
*/

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home"));
const Films = lazy(() => import("./components/Films"));
const People = lazy(() => import("./components/People"));
const Planets = lazy(() => import("./components/Planets"));
const Species = lazy(() => import("./components/Species"));
const Starships = lazy(() => import("./components/Starships"));
const Vehicles = lazy(() => import("./components/Vehicles"));

function App() {
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const url = "https://swapi.dev/api/films/";
      const res = await fetch(url);
      const data = await res.json();
      setFilms(data.results);
    };
    const fetchPeople = async () => {
      const url = "https://swapi.dev/api/people/";
      const res = await fetch(url);
      const data = await res.json();
      setPeople(data.results);
    };
    const fetchPlanets = async () => {
      const url = "https://swapi.dev/api/planets/";
      const res = await fetch(url);
      const data = await res.json();
      setPlanets(data.results);
    };
    const fetchSpecies = async () => {
      const url = "https://swapi.dev/api/species/";
      const res = await fetch(url);
      const data = await res.json();
      setSpecies(data.results);
    };
    const fetchStarships = async () => {
      const url = "https://swapi.dev/api/starships/";
      const res = await fetch(url);
      const data = await res.json();
      setStarships(data.results);
    };
    const fetchVehicles = async () => {
      const url = "https://swapi.dev/api/vehicles/";
      const res = await fetch(url);
      const data = await res.json();
      setVehicles(data.results);
    };

    fetchPlanets();
    fetchPeople();
    fetchFilms();
    fetchSpecies();
    fetchVehicles();
    fetchStarships();
  }, []);

  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="container mx-5 my-5">
              <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div
                  className="spinner-border ms-auto"
                  role="status"
                  aria-hidden="true"
                ></div>
              </div>{" "}
            </div>
          }
        >
          <Navbar />
          <div className="container my-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films results={films} />} />
              <Route path="/people" element={<People results={people} />} />
              <Route path="/planets" element={<Planets results={planets} />} />
              <Route path="/species" element={<Species results={species} />} />
              <Route
                path="/starships"
                element={<Starships results={starships} />}
              />
              <Route
                path="/vehicles"
                element={<Vehicles results={vehicles} />}
              />
            </Routes>
          </div>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
