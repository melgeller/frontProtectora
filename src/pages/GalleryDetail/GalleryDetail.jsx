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
      }, 1000);
    };
    getPetsById();
  },[]);

  return (
    <div className='details'>
    <div className='main'>
    <Link to='/gallery'>
    <img src="../../../assets/flecha.png" alt="flecha"/>
    </Link></div>
      {pet ? (
        <>
          {loaded ? (
            <div className="galleryDetail">
            <div className="pictureDetail">
              <img src={pet.picture} alt={pet.name}></img>
              </div>
              <div className="detailsDetail">
              <p>{pet.name}</p>
              <p>{pet.sex}</p>
              <p>{pet.age}</p>
              <p>{pet.size}</p>
              <p>{pet.adopted}</p>
              </div>
              <div className="textDetail">
              <p>{pet.description}</p>
              </div>
              <div className="buttonDetail">
              <p><Link to='/adopcion'>Adoptar</Link></p>
              </div>
            </div> 
            
          ) : (
            <div className='gif'>
              <img src='../../assets/gif4.gif' alt='loaded'></img>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default GalleryDetail;
