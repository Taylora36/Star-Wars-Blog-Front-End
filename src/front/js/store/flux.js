const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//message: null,
				favorites: [],
			people: [],
			planets: [],
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
				
			// ]
		},
		actions: {
			// Use getActions to call a function within a fuction
				getPeople: async () => {
				  let url = "https://swapi.dev/api/people";
				  const response = await fetch(url);
				  const data = await response.json();
			  
				  setStore({
					people: data.results,
				  });
				},
				getPlanets: async () => {
					let url = "https://swapi.dev/api/planets/";
					const res = await fetch(url);
					const data = await res.json();
					console.log(data)
	
					setStore({
						planets: data.results,
					});
				},
				getSinglePlanet: (id) => {
					fetch(`https://swapi.dev/api/planets/${id}`)
					  .then((response) => response.json())
					  .then((data) => {console.log(data); 
						setStore({ singlePlanet: data })
					});
					  
				},
				getSingleCharacter: (id) => {
					fetch(`https://swapi.dev/api/people/${id}`)
					  .then((response) => response.json())
					  .then((data) => {console.log(data); 
						setStore({ singleCharacter: data })
					});
					  
				},
				getSpecies: async () => {
					let url = "https://swapi.dev/api/species";
					const res = await fetch(url);
					const data = await res.json();
	
					setStore({
						species: data.results,
					});
				},
	
				getStarships: async () => {
					let url = "https://swapi.dev/api/starships";
					const res = await fetch(url);
					const data = await res.json();
	
					setStore({
						starships: data.results,
					});
				},
				getVehicles: async () => {
					let url = "https://swapi.dev/api/vehicles";
					const res = await fetch(url);
					const data = await res.json();
	
					setStore({
						vehicles: data.results,
					})
				},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
