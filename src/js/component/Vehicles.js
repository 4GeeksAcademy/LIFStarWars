import React, {useContext} from 'react'
import { Context } from "../store/appContext"
import { useNavigate } from 'react-router';


const Vehicles = () => {

    //logica de JS
  const {store} = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className='contenedor m-4'>
      <h2 style={{ color: "red", textAlign: "start", margin: "10px", }}> Vehicles</h2>

      <div className="d-flex" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        {store.vehicles && store.vehicles.length > 0 ?(
        store.vehicles.map((vehicle) => (

          <div className="card m-2" key={vehicle.uid} style={{ width: "400px", flex: " 0 0 auto", }} >
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top bg-secondary" alt={vehicle.name} />
            <div className="card-body bg-secondary">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text text-start" style={{ whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis" }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className='icons d-flex justify-content-between'>

              <button type="button" className="btn btn-outline-primary" onClick={()=> navigate(`/details/vehicles/${vehicle.uid}`)}>Learn more!</button>

              <i className="fa-solid fa-shield-heart"></i>

              </div>
            </div>
          </div>
        ))
      ) : (
        <p> loading....</p>


        )}

      </div>
    </div>
  );
};

export default Vehicles
