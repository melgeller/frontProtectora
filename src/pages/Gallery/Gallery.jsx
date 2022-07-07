import React from 'react'
import { useContext } from 'react'
import { PetContext } from '../../context/context'
import "./Gallery.scss"
import { Link } from "react-router-dom";

const Gallery = () => {
 const { pets } = useContext(PetContext)
 

  return (
    <div className='gallery'>
    
    {pets.map((pet)=> (
      <Link key={pet._id} to={`${pet._id}`}>
      <div className='carta'>
       <img src={pet.picture} alt={pet.name}/>
       <div className='texto-alfredo'>
       <p>{pet.name}</p>
       <p>{pet.sex}</p>
       <p>{pet.age}</p>
       <p>{pet.size}</p>
       <p>{pet.adopted}</p>
       </div>
       <p>{pet.description}</p>
       <button>ver bicho</button>
      </div>

      </Link>
    ))}

    

    </div>
    


    
  )

}

export default Gallery