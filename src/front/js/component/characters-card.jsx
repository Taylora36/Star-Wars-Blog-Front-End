import React from "react";
import PropType from "prop-types";

export const Characters = (props) =>{
    const style = {
        width: props.width ? props.width : "18rem",
      };
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
        <div className="row">
            <div className="card mx-3" style={style}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECWmxT_7rPV-RrZ-1a41Pb3YO5K5v6kgtuFdnXZroag1qkNGNO5pKeU1N4tN_zCwxA6M&usqp=CAU"
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
        
Characters.propTypes = {
    title: PropType.string,
    imageURL: PropType.string,
    text: PropType.string,
    //button: PropType.string,
};