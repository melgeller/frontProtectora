import React, { useEffect, useState } from 'react';
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
  const [filter,setFilter]=useState("");
  const [filteredPets,setFilteredPets]=useState([])
  useEffect(()=>{
    setFilteredPets([...pets])
    
  },[pets])

  const deletePet = (id, name) => {
    console.log({ id });
    Swal.fire({
      title: '¿Estas seguro?',
      text: `Vamos a borrar a ${name} y esta acción no es reversible`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!',
    }).then((result) => {
      if (result.isConfirmed) {
        API.delete(`/pets/${id}`).then((res) => {});
        Swal.fire(
          `¡${name} ha sido borrado!`,
          'Tu mascota ha sido borrada de la BBDD.',
          'ok',
          window.location.reload(false)
        );
      }
    });
  };

  return (
    <div className='gallery'>
      <p className='main'>
        <Link to='/'>
          <img src='../../../assets/flecha.png' alt='flecha' />
        </Link>
        <div className='botonesAlfredo'>
        <p className='linkPerro' onClick={()=>setFilter("perro")}>perros</p>
        <p className='linkPerro' onClick={()=>setFilter("gato")}>gatos</p>
        <p className='linkPerro' onClick={()=>setFilter("")}>todos</p>
        </div>
      </p>
      {filteredPets.filter((pet)=>pet.type.toLowerCase().includes(filter)).map((pet) => (
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
          <div className='botonesGallery'>
          <Link key={pet._id} to={`${pet._id}`}>
            <p className='linkPerro'>Ver</p>
          </Link>
          {jwt && (
            <>

              <Link key={pet._id} to={`/adminmascota/${pet._id}`}>
                <p className='linkPerro'>Editar {pet.name}</p>
              </Link>
              <p
                className='linkPerro'
                onClick={(ev) => deletePet(`${pet._id}`, `${pet.name}`)}>
                Borrar
              </p>
            </>
        
          )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
