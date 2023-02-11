import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const name = store.singlePlanet?.name;
  const climate = store.singlePlanet?.climate;
  const diameter = store.singlePlanet?.diameter;
  const gravity = store.singlePlanet?.gravity;
  const population = store.singlePlanet?.population;
  const terrain = store.singlePlanet?.terrain;
  const orbitalPeriod = store.singlePlanet?.orbital_period;
  useEffect(() => {
    actions.getSinglePlanet(id);
    console.log(store.singlePlanet);
  }, [id]);
  console.log(store.singlePlanet);
  // console.log(store.planets.results[0].name)
  return (
    <>
      <h1 className="title text-center" id="heading">
        {name}
      </h1>
      <div className="itemDescription">
        <p className="card paragraph">
          {name} is a planet with a population of {population} sentient
          habitants. <br /> With the terrain being mostly {terrain} and other
          tiny variations, the planet has a diameter of {diameter} kms, an
          orbital period of {orbitalPeriod} days and a gravity index of{" "}
          {gravity} units.
          <br /> The climate on this planet is {climate}, so make sure to plan
          your journey accordingly.
        </p>
      </div>
    </>
  );
};
