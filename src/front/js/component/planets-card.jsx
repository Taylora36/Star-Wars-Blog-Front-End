import React from "react";
import PropType from "prop-types";

export const Planets = (props) =>{
    const style = {
        width: props.width ? props.width : "18rem",
      };
      
      
    return(
        <div className="row">
        <div className="card mx-3 g-5" style={style}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0emOxME-j9NzQQM75_CROCp4e-Fvvp99nomDVi7PAf_CAn1YJA8CiiEiCxQDZih3XbEw&usqp=CAU"
                className="card-img-top p-3"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">{props.title ? props.title : "Title"}</h5>
                <p className="card-text">{props.children}</p>
              </div>
            </div>
            </div>
    );
};
Planets.propTypes = {
    title: PropType.string,
    imageURL: PropType.string,
    text: PropType.string,
    //button: PropType.string,
};