import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './GalleryDetail.scss';
import { Link } from 'react-router-dom';

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
  }, []);

  return (
    <div className='details'>
      <div className='main'>
        <Link to='/gallery'>
          <img src='../../../assets/flecha.png' alt='flecha' />
        </Link>
      </div>
      {pet ? (
        <>
          {loaded ? (
            <div className='galleryDetail'>
              <div className='pictureDetail'>
              {pet.picture && pet.picture.includes("cloudinary") && pet.picture !== 'undefined' ? (
                <img src={pet.picture} alt={pet.name}></img>
              ):(<img src='../../assets/logoperro.png' alt={pet.name}/>)}
                <div className='petPictureMin'>
                  {pet.picture1 && pet.picture1.includes("cloudinary") ? (
                    <img src={pet.picture1} alt={pet.name}/>
                  ):null}
                  {pet.picture2 && pet.picture2.includes("cloudinary") ? (
                    <img src={pet.picture2} alt={pet.name}></img>
                  ):null}
                </div>
              </div>
              <div className='detailsDetail'>
                <h1>{pet.name}</h1>
                <p className='petType'>{pet.type}</p>
                <div className='petFeature'>
                  {pet.sex === 'macho' ? (
                    <p className='petSex male'>♂ {pet.sex}</p>
                  ) : (
                    <p className='petSex female'>♀ {pet.sex}</p>
                  )}

                  <p className='petAge'>🎂 {pet.age}</p>
                  <p className='petSize'>📏 {pet.size}</p>
                </div>
                <p className='petAdopted'>{pet.adopted}</p>
                <p className='petDetail'>{pet.description}</p>
                <div className='buttonDetail'>
                  <p>
                    <Link to='/adopcion'>Adoptar</Link>
                  </p>
                </div>
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
