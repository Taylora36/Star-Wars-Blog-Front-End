import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const name = store.singleCharacter?.name;
  const gender = store.singleCharacter?.gender;
  const hairColor = store.singleCharacter?.hair_color;
  const height = store.singleCharacter?.height;
  const skinColor = store.singleCharacter?.skin_color;
  const eyeColor = store.singleCharacter?.eye_color;
  const birthYear = store.singleCharacter?.birth_year;
  
  useEffect(() => {
    actions.getSingleCharacter(id);
    console.log(store.singleCharacter);
  }, [id]);
  console.log(store.singleCharacter);
  // console.log(store.planets.results[0].name)
  return (
    <>
      <h1 className="title text-center">
        {name}
      </h1>
      <div className="container">
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">About This Character</h5>
          <p class="card-text">{name} is {gender} with {hairColor} and {eyeColor}. Below is a list of further information about this Star Wars character.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  

  
    </>
  );
};
