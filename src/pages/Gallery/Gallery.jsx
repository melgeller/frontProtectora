import React from "react";
import { useContext } from "react";
import { PetContext } from "../../context/context";
import "./Gallery.scss";
import { Link } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";

const Gallery = () => {
  const { pets } = useContext(PetContext);
  const { jwt } = useContext(JwtContext);

  return (
    <div className='gallery'>
      <div className='goBack'>
        <p className='main'>
          <Link to='/'> --Volver a la vista principal</Link>
        </p>
        <p className='main filtro'>Filtro</p>
      </div>

      {pets.map((pet) => (
        <div className='carta'>
          <img src={pet.picture} alt={pet.name} />
          <div className='texto-animales'>
            <h3>{pet.name}</h3>
            <p>Sexo: {pet.sex}</p>
            <p>Edad: {pet.age}</p>
            <p>Tamaño: {pet.size}</p>
            <p>{pet.adopted}</p>
          </div>
          <p className='animalsP'>{pet.description}</p>
          <Link key={pet._id} to={`${pet._id}`}>
            <p className='linkPerro'>Ver Detalle</p>
          </Link>
          {jwt && (
            <>
              <Link key={pet._id} to={`/edit/${pet._id}`}>
                <p className='linkPerro'>Editar</p>
              </Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
