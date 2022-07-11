import React, { useState } from 'react';
import { useContext } from 'react';
import { PetContext } from '../../context/context';
import './Gallery.scss';
import { Link } from 'react-router-dom';
import { JwtContext } from '../../context/jwtContext';
import { API } from '../../services/api';
import Swal from 'sweetalert2';


const Gallery = () => {
  const { pets } = useContext(PetContext);
  const { jwt } = useContext(JwtContext);
  const [loaded, setLoaded] = useState(false);

  const deletePet = (id, name) => {
    console.log({ id });
    Swal.fire({
      title: '¿Estas seguro?',
      text: `Vamos a borrar a ${name} y esta acción no es reversible`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        API.delete(`/pets/${id}`).then((res) => {});
        Swal.fire(
          `¡${name} ha sido borrado!`,
          'Tu mascota ha sido borrada de la BBDD.',
          'ok',
            window.location.reload(false)
        )
        }
    })

  };

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
            <p>Id: {pet._id}</p>
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
                <p className='linkPerro'> {pet.name}</p>
              </Link>
              <p
                className='linkPerro'
                onClick={(ev) => deletePet(`${pet._id}`, `${pet.name}`)}>
                Borrar {pet.name}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
