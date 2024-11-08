
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			characters: [], // Lista de personajes
			vehicles: [], // Lista de vehiculos
			planets: [], // Lista de planetas
			favorites: [],// Lista de favoritos


		},
		actions: {
			// LLamar a Store, hacer copia de los favoritos y pasarle mis favoritos
			addFav: (item) => {
				const store = getStore();
				const newFav = { ...item, type: item.type || (item.name ? "character" : "planet") };
				if (!store.favorites.some(fav => fav.uid === item.uid && fav.type === newFav.type)) {
					setStore({ favorites: [...store.favorites, newFav] });

				}

			},
			removeFavByUid: (uid, type) => {
				const store = getStore();
				const updateFavorites = store.favorites.filter(fav => !(fav.uid === uid && fav.type === type));
				setStore({ favorites: updateFavorites });
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			},
			//Get People 
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => {
						if (!response.ok) {
							console.error(`Error ${response.status}:La solicitud no fue exitos.`);
							throw new Error(`HTTP error! status: ${response.status}`);
						}
						return response.json();
					})

					.then(data => {
						console.log("Datos obtenidos:", data.results);
						setStore({ characters: data.results });
					})
					.catch(error => {
						console.error(" Hubo un error al obtnere los contactos:", error);
					});
			},
			//Get Vehicles 
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! status: ${response.status}`);
						}
						return response.json();
					})

					.then(data => {
						console.log("Datos obtenidos:", data.results);
						setStore({ vehicles: data.results });
					})
					.catch(error => {
						console.error(" Hubo un error al obtnere los contactos:", error);
					});
			},
			//Get Planets
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! status: ${response.status}`);
						}
						return response.json();
					})

					.then(data => {
						console.log("Datos obtenidos:", data.results);
						setStore({ planets: data.results });
					})
					.catch(error => {
						console.error(" Hubo un error al obtnere los contactos:", error);
					});
			},
		}
	};

};

export default getState;
