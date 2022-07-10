import React from 'react';
import { useContext } from 'react';
import { PetContext } from '../../context/context';
import './Gallery.scss';
import { Link } from 'react-router-dom';
import { JwtContext } from '../../context/jwtContext';
const Gallery = () => {
  const { pets } = useContext(PetContext);
  console.log("esto son pets",pets);
  const { jwt } = useContext(JwtContext);
  console.log("esto es jwt",jwt);
  return (
    <div className='gallery'>
      <p className='main'>
        <Link to='/'>
          <img src='../../../assets/flecha.png' alt='flecha' />
        </Link>
        <p>Filtro</p>
      </p>
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
            <p className='linkPerro'>Ver {pet.name}</p>
          </Link>
          {jwt && (
            <>
              <Link key={pet._id} to={`/admin/${pet._id}`}>
                <p className='linkPerro'>Editar {pet.name}</p>
              </Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
