import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Characters = (props) =>{
  const { actions } = useContext(Context);
    // const [people, setPeople] = useState({});
    // useEffect(async () => {
    //     let url = "https://swapi.dev/api/people"
    //     setPeople(await (await fetch(url, { method: "GET"})).json());
    // });
    // const [people, setPeople] = useState({});
    // useEffect(() =>{
	// 	async function fetchPeople() {
	// 		let res = await fetch('https://swapi.dev/api/people');
	// 		let data = await res.json();
	// 		setPeople(data.results);
	// 	}
    //     fetchPeople();
    // }, []);
    return (
        // <div className="container">
        // <div className="container">
        //     <h1>Characters</h1>
        // </div>
        // <div className="row">
        //     <div className="col col-8 offset-2">
        //         <div className="card my-3">
        //             <div className="card-body" style={style}>
        //                 <h5 className="card-title">
        //                 {props.title ? props.title : "Title"}
        //                 </h5>
        //                 <ul className="list-group list-group-flush">
        //                     <li className="list-group-item">
        //                         <span>Gender:</span>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </div>
        // <div className="row">
        //     <div className="card mx-3 g-5" style={style}>
        //       <img id="character"
        //         src="data:image/jpeg;base64,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"
        //         className="card-img-top p-3"
        //         alt="..."
        //       />
        //       <div className="card-body">
        //         <h5 className="card-title text-center">{props.title ? props.title : "Title"}</h5>
        //         <p className="card-text">{props.children}</p>
        //       </div>
        //     </div>
        //     </div>
        //   );
        // };
        <div className="col">
      <div className="card shadow my-3">
        <img
          src="https://cdn.vox-cdn.com/thumbor/_3sxdcRY2QVXlvtFzm9QbU8XTDA=/0x0:2770x1166/1200x800/filters:focal(1668x327:2110x769)/cdn.vox-cdn.com/uploads/chorus_image/image/66532457/Screen_Shot_2020_01_22_at_9.38.17_AM.0.png"
          className="card-img-top"
          alt="..."
        />
        <div className="body text-dark">
          <h4 className="card-title text-center p-3">{props.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Gender: <span className="text-capitalize">{props.gender}</span>
            </li>
            <li className="list-group-item">
              Birth Year:{" "}
              <span className="text-capitalize">{props.birth_year}</span>
            </li>
            <li className="list-group-item">
              Height: <span className="text-capitalize">{props.height}</span>
            </li>
          </ul>
          <div className="d-flex justify-content-between p-3">
            <div className="">
              <Link to={`/people/${props.id}`}>
                <div className="btn btn-outline-warning">Details</div>
              </Link>
              {/* <Link
                      to={"/people/" + (idx + 1)}
                      className="btn btn-outline-primary"
                    >
                      Go somewhere
                    </Link> */}
            </div>
            <div className="">
              <button
                className="btn btn-outline-warning"
                onClick={() => actions.addToFavorites(props.name)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
        
// Characters.propTypes = {
//     title: PropType.string,
//     imageURL: PropType.string,
//     text: PropType.string,
//     //button: PropType.string,
// };
Characters.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.string,
  birth_year: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
};