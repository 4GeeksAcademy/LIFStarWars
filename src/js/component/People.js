import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router';


const People = () => {
  //logica de JS
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className='contenedor  m-4'>
      <h2 style={{ color: "red", textAlign: "start", margin: "10px", }}> People</h2>

      <div className="d-flex" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        {store.characters && store.characters.length > 0 ? (
          store.characters.map((character) => {
            const isFavorite = store.favorites.some(fav => fav.uid === character.uid && fav.type === "character");

            return (

              <div className="card m-2" key={character.uid} style={{ width: "400px", flex: " 0 0 auto", }} >
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                  oneError={(e) => {
                    o.target.oneError = null;
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}

                  className="card-img-top"
                  alt={character.name}
                  style={{ width: "400px", height: "100%x", objectFit: "cover" }} />

                <div className="card-body bg-secondary">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text text-start"
                    style={{ whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis" }}>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.</p>
                  <div className='icons d-flex justify-content-between'>

                    <button type="button"
                      className="btn btn-outline-primary"
                      onClick={() => navigate(`/details/people/${character.uid}`)}>Learn more!</button>


                    <i className={`fa-solid fa-shield-heart ${isFavorite ? "text-danger" : ""}`}
                      onClick={() => isFavorite ? actions.removeFavByUid(character.uid, "character") : actions.addFav({...character, type: "character"})}
                    ></i>

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

export default People
