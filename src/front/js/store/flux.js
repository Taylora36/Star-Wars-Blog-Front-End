const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //message: null,
      favorites: [],
      people: [],
      planets: [],
      vehicles: [],
      singleVehicle: [],
    },

    actions: {
      // Use getActions to call a function within a fuction
      getPeople: async () => {
        let url = "https://swapi.dev/api/people/";
        const res = await fetch(url);
        const data = await res.json();

        setStore({
          people: data.results,
        });
      },

      getPlanets: async () => {
        let url = "https://swapi.dev/api/planets";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        setStore({
          planets: data.results,
        });
      },

      getSinglePlanet: (id) => {
        fetch(`https://swapi.dev/api/planets/${id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ singlePlanet: data });
          });
      },

      getSingleCharacter: (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ singleCharacter: data });
          });
      },

      getVehicles: async () => {
        let url = "https://swapi.dev/api/vehicles";
        const res = await fetch(url);
        const data = await res.json();

        setStore({ vehicles: data.results });
      },

      getSingleVehicle: async (id) => {
        let url = `https://swapi.dev/api/vehicles/${id}`;

        try {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          setStore({ singleVehicle: data });
        } catch (error) {
          throw Error(error);
        }
      },

      addToFavorites: (itemName) => {
        const store = getStore();
        let favoriteList = [...store.favorites, itemName];
        let uniqueFavoriteList = [...new Set(favoriteList)];
        setStore({ favorites: uniqueFavoriteList });
      },
      removeFromFavorites: (idx) => {
        const store = getStore();
        let newFavorites = store.favorites.filter((item, index) => index != idx)
        setStore({ favorites: newFavorites });
      },
    },
  };
};

export default getState;
