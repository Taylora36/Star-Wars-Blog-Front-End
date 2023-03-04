import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar">
  			<div className="container">
    		<a className="navbar-brand col-4 offset-5" href="#">
     		 <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Bootstrap" width="120" height="50"/>
    		</a>
			<div className="dropdown">
          	<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites <FontAwesomeIcon icon={faHeart}  />
          	</button>
			  
        <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.map((item, index) => <li><a className="dropdown-item d-flex justify-content-between align-items-center">{item}<FontAwesomeIcon icon={faTrash} style={{cursor:"pointer"}} onClick = {() => actions.removeFromFavorites(index)} /></a></li>)}
          </ul>
		  </div>
  			</div>
		</nav>
	);
};