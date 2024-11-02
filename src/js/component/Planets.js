import React, { useContext } from 'react'
import { Context } from "../store/appContext"
import { useNavigate } from 'react-router';


const Planets = () => {
  //logica de JS
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className='contenedor m-4'>
      <h2 style={{ color: "red", textAlign: "start", margin: "10px", }}> Planets</h2>

      <div className="d-flex" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        {store.planets && store.planets.length > 0 ? (
          store.planets.map((planet) => {
            const isFavorite = store.favorites.some(fav => fav.uid === planet.uid);

            return (


              <div className="card m-2" key={planet.uid} style={{ width: "400px", flex: " 0 0 auto", }} >
                <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  className="card-img-top "
                  alt={planet.name}
                  style={{ width: "400px", height: "100%", objectFit: "cover" }} />
                <div className="card-body bg-secondary ">
                  <h5 className="card-title">{planet.name}</h5>
                  <p className="card-text text-start"
                    style={{ whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis" }}>This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.</p>
                  <div className='icons d-flex justify-content-between'>

                    <button type="button"
                      className="btn btn-outline-primary"
                      onClick={() => navigate(`/details/planets/${planet.uid}`)}>Learn more!</button>

                    <i className={`fa-solid fa-shield-heart ${isFavorite ?
                      "text-danger" : ""}`}

                      onClick={() => isFavorite ?
                        actions.removeFrayByUid(planet.uid) :
                        actions.addFav(planet)}>

                    </i>

                  </div>
                </div>
              </div>
            );
          })

        ) : (
          <p> loading....</p>


        )}

      </div>
    </div>
  );
};

export default Planets

