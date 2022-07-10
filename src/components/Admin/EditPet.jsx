import React,  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { API } from '../../services/api'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditPet = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [pet, setPets] = useState({});  

  useEffect(() => {
    const getPetsById = async () => {
      const res = await axios.get(
        `https://back-node-protectora.vercel.app/pets/${id}`
        );
        setPets(res.data.pet);
    };
    getPetsById();
  });

  const onSubmit = (newdata) => {
    console.log(newdata);
    const formData = new FormData();
    formData.append('name', newdata.name);
    formData.append('type', newdata.type);
    formData.append('sex', newdata.sex);
    formData.append('size', newdata.size);
    formData.append('age', newdata.age);
    formData.append('adopted', newdata.adopted);
    formData.append('description', newdata.description);
    formData.append('picture', newdata.picture[0]);
    formData.append('picture1', newdata.picture1[0]);
    formData.append('picture2', newdata.picture2[0]);
    console.log("esto es formdata",formData);
    API.patch(`/pets/${id}`, formData).then((res) => {
    });
    navigate('/gallery');
  };

  useEffect(() =>  {
    const getPetsById = async () => {
      const res = await axios.get(
        `https://back-node-protectora.vercel.app/pets/${id}`
      );
      setPets(res.data.pet);
    }
    getPetsById();
  },[]);

  return (
    <>
      <h1>Editar mascota</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formField'>
          <label htmlFor='name'>Nombre de mascota</label>
          <input
            type='text'
            id='name'
            value={pet.name}
            onChange={ev => setPets({...pet, name: ev.target.value})}
            {...register('name', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='type'>Tipo de mascota</label>
          <select
            name='type'
            id='type'
            {...register('type', { required: true })}>
            {pet.type === 'perro' && (
              <>
              <option value='perro' selected>Perro</option>
              <option value='gato'>Gato</option>
              </>
            )} : {pet.type === 'gato' && (
              <>
              <option value='perro'>Perro</option>
              <option value='gato' selected>Gato</option>
              </>
            )}
          </select>
        </div>
        <div className='formField'>
          <label htmlFor='sex'>Sexo</label>
          <select name='sex' id='sex' {...register('sex', { required: true })}>
          {pet.sex === 'macho' && (
            <>
              <option value='macho' selected>Macho</option>
              <option value='hembra'>Hembra</option>
            </>
          )} : {pet.sex === 'hembra' && (
            <>
              <option value='macho' >Macho</option>
              <option value='hembra' selected>Hembra</option>
            </>
          )}
          </select>
        </div>
        <div className='formField'>
          <label htmlFor='size'>Tamaño</label>
          <select
            name='size'
            id='size'
            {...register('size', { required: true })}>
            <option value='pequeño'>Pequeño</option>
            <option value='mediano'>Mediano</option>
            <option value='grande'>Grande</option>
          </select>
        </div>
        <div className='formField'>
          <label htmlFor='age'>Edad</label>
          <input
            type='text'
            id='age'
            value={pet.age}
            {...register('age', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='adopted'>Adoptado</label>
          <input
            type='radio'
            name='adopted'
            value={true}
            {...register('adopted', { required: true })}
          />
          <label for='adopted'>Si</label>
          <input
            type='radio'
            name='adopted'
            value={false}
            checked
            {...register('adopted', { required: true })}
          />
          <label for='adopted'>No</label>
        </div>
        <div className='formField'>
          <label htmlFor='description'>Decripcion</label>
          <textarea
            id='description'
            name='description'
            rows='4'
            cols='50'
            value={pet.description}
            {...register('description', { required: true })}>
            Pon aquí la descripción de tu mascota.
          </textarea>
        </div>
        <div className='formField'>
          <label htmlFor='picture'>Select files:</label>
          <input
            type='file'
            id='picture'
            multiple
            {...register('picture', { required: false })}
          />
          <input
            type='file'
            id='picture'
            multiple
            {...register('picture1', { required: false })}
          />
          <input
            type='file'
            id='picture'
            
            multiple
            {...register('picture2', { required: false })}
          />
        </div>
        <button type='submit' className='buttonh'>Editar mascota</button>
      </form>      
    </>
  );
};

export default EditPet