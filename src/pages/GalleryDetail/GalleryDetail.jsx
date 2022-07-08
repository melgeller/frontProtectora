import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./GalleryDetail.scss";
import { Link } from "react-router-dom";

const GalleryDetail = () => {
  const { id } = useParams();
  const [pet, setPets] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getPetsById = async () => {
      const res = await axios.get(
        `https://back-node-protectora.vercel.app/pets/${id}`
      );

      setPets(res.data.pet);
      
      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    };
    getPetsById();
  });

  return (
    <div className='details'>
    <div className='goBack'>
    <p className='main'><Link to='/'> --Volver a la vista principal</Link></p>
    </div>
      {pet ? (
        <>
          {loaded ? (
            <>
              <img src={pet.picture} alt={pet.name}></img>
              <p>{pet.name}</p>
              <p>{pet.sex}</p>
              <p>{pet.age}</p>
              <p>{pet.size}</p>
              <p>{pet.adopted}</p>
              <p>{pet.description}</p>
            </>
          ) : (
            <div className='gif'>
              <img src='../../assets/loaded.gif' alt='loaded'></img>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default GalleryDetail;
