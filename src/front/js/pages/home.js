import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters-card.jsx";
import { Planets } from "../component/planets-card.jsx";
import "../../styles/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
//import {getState} from ".store/flux.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  // Call useEffect hook on what we need, in this case we need to fetch people. We already set up our fetch in flux.js so we just call the action.methodName for what we need.
  // This method allows us to pass in any key value inside of our card where it's needed e.g. hair, eyes, name, DOB etc. etc.
  useEffect(() => {
    actions.getPeople();
  }, []); // Notice how there's no default empty array here. We don't need it because then it would be infinite loading
  useEffect(() => {
    actions.getPlanets();
  }, []);

  const addToFavorites = (item) => {
    store.planetsFavorites.push(item);
    console.log(store.planetsFavorites);
  };

  return (
    <div className="container">
      <div className="container">
        <h1 id="heading">Characters</h1>
      </div>

      <div className="album py-5 bg-light d-flex justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-between row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {store.people.map((elem, idx) => {
              return (
                <Characters key={idx} title={elem.name}>
                  <ul className="list-group mb-3 list-group-flush">
                    <li className="list-group-item">Gender: {elem.gender}</li>
                    <li className="list-group-item">
                      Hair Color: {elem.hair_color}
                    </li>
                    <li className="list-group-item">
                      Eye Color: {elem.eye_color}
                    </li>
                  </ul>
                  <div className="d-flex justify-content-between">
                  <Link
                        to={"/people/"+(idx+1)}
                        className="btn btn-outline-primary"
                      >
                      Go somewhere
                    </Link>
                    <a href="#" class="btn btn-outline-warning">
                      <FontAwesomeIcon icon={faHeart} />
                    </a>
                  </div>
                </Characters>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 id="heading">Planets</h1>
        </div>

        <div className="album py-5 bg-light d-flex justify-content-center">
          <div className="container">
            <div className="d-flex justify-content-between row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {store.planets.map((elem, idx) => {
                return (
                  <Planets key={idx} title={elem.name}>
                    <ul className="list-group mb-3 list-group-flush">
                      <li className="list-group-item">
                        Population: {elem.population}
                      </li>
                      <li className="list-group-item">
                        Terrain: {elem.terrain}
                      </li>
                    </ul>
                    
                    <div className="d-flex justify-content-between">
                    {/* //Fix this to make it make sense */}
                      <Link
                        to={"/planets/"+(idx+1)}
                        className="btn btn-outline-primary"
                      >
                        Go somewhere
                      </Link>
                      {/* <button href="#" class="btn btn-outline-warning" onClick={() => {addToFavorites(Planets)}}><PlanetDetailsButton/>
                    <FontAwesomeIcon icon={faHeart} />
                  </button> */}
                    </div>
                  </Planets>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
