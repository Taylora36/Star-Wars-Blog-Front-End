import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  // Variable Declarations
  // const name = store.singleVehicle?.name;
  // const model = store.singleVehicle?.model;
  // const manufacturer = store.singleVehicle?.manufacturer;
  // const costInCredits = store.singleVehicle?.cost_in_credits;
  // const length = store.singleVehicle?.length;
  // const crew = store.singleVehicle?.crew;
  // const passengers = store.singleVehicle?.passengers;
  // const cargoCapacity = store.singleVehicle?.cargo_capacity;
  // const vehicleClass = store.singleVehicle?.vehicle_class;

  useEffect(() => {
    actions.getSingleVehicle(id);
  }, []);

  return (
    <>
      <h1 id="heading1" className="title text-center">
        {store.singleVehicle.name}
      </h1>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFu-Yjsu5o_TjTiYR1eTelivAUweElAP7UQ&usqp=CAU"
                id="planet"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">About This Vehicle</h3>
                <p className="card-text">
                  {store.singleVehicle.name} is a vehicle with a model of {store.singleVehicle.model} and manufactured
                  at {store.singleVehicle.manufacturer}.
                  <br />
                  <br />
                  1{store.singleVehicle.cost_in_credits}
                  <br />
                  2{store.singleVehicle.length}
                  <br />
                  3{store.singleVehicle.crew}
                  <br />
                  4{store.singleVehicle.passengers}
                  <br />
                  5{store.singleVehicle.cargo_capacity}
                  <br />
                  6{store.singleVehicle.vehicle_class}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
