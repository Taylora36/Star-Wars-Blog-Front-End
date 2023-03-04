import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  // Variable Declarations
  const name = store.singlePlanet?.name;
  const climate = store.singlePlanet?.climate;
  const diameter = store.singlePlanet?.diameter;
  const gravity = store.singlePlanet?.gravity;
  const population = store.singlePlanet?.population;
  const terrain = store.singlePlanet?.terrain;
  const orbitalPeriod = store.singlePlanet?.orbital_period;
  const rotationPeriod = store.singlePlanet?.rotation_period;

  useEffect(() => {
    actions.getSinglePlanet(id);
    console.log(store.singlePlanet);
  }, [id]);
  console.log(store.singlePlanet);

  return (
    <>
      <h1 id="heading1" className="title text-center">
        {name}
      </h1>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFu-Yjsu5o_TjTiYR1eTelivAUweElAP7UQ&usqp=CAU"
                id="planet"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">About This Planet</h3>
                <p className="card-text">
                  {name} is a planet with a diameter of {diameter} and a gravity
                  marked at {gravity}.
                  <br />
                  <br />
                  The climate on {name} is {climate} with a {terrain} terrain,
                  so plan ahead on what to pack. Other key details include the
                  following: a population of {population}, an orbital period of{" "}
                  {orbitalPeriod}, and a rotation period of {rotationPeriod}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
