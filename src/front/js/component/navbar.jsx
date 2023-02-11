import React from "react";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	return (
		<nav class="navbar bg-light">
  			<div class="container">
    		<a class="navbar-brand" href="#">
     		 <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Bootstrap" width="70" height="30"/>
    		</a>
			<li class="nav-item dropdown">
          	<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites <FontAwesomeIcon icon={faHeart}  />
          	</a>
			  
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
  			</div>
		</nav>
	);
};