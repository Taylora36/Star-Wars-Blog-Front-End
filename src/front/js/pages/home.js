import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters-card.jsx";
import { Planets } from "../component/planets-card.jsx";
import { Vehicles } from "../component/vehicles-card.jsx";
import "../../styles/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  
  useEffect(() => {
    actions.getPeople();
  }, []); 
  
  useEffect(() => {
    actions.getPlanets();
  }, []);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <h1 id="heading">Characters</h1>
      </div>

      <div className="album py-5 d-flex justify-content-center" id="card">
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
                      to={"/people/" + (idx + 1)}
                      className="btn btn-outline-primary"
                    >
                      Go somewhere
                    </Link>
                    <a
                      onClick={() => actions.addToFavorites(elem.name)}
                      href="#"
                      class="btn btn-outline-warning"
                    >
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

        <div className="album py-5 d-flex justify-content-center">
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
                        to={"/planets/" + (idx + 1)}
                        className="btn btn-outline-primary"
                      >
                        Go somewhere
                      </Link>
                      <a
                        onClick={() => actions.addToFavorites(elem.name)}
                        href="#"
                        class="btn btn-outline-warning"
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </a>
                    </div>
                  </Planets>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 id="heading">Vehicles</h1>
        </div>

        <div className="album py-5 d-flex justify-content-center">
          <div className="container">
            <div className="d-flex justify-content-between row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {store.vehicles.map((elem, idx) => {
                return (
                  <div key={idx}>
                    <Vehicles
                      key={idx}
                      name={elem.name}
                      model={elem.model}
                      manufacturer={elem.manufacturer}
                      cost_in_credits={elem.cost_in_credits}
                      id={idx + 4}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
