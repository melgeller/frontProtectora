import React,  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { API } from '../../services/api'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './EditPet.scss'

const EditPet = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [pet, setPets] = useState({});  
 
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
    API.patch(`http://localhost:8001/pets/${id}`, formData).then((res) => {
    });
    navigate('/gallery');
  };

  useEffect(() =>  {
    const getPetsById = async () => {
      const res = await axios.get(
        `http://localhost:8001/pets/${id}`
      );
      setPets(res.data.pet);
    }
    getPetsById();
  },[]);
  useEffect(() => {
    // reset form with user data
    reset(pet);
}, [pet]);

  return (
    <>
    <div className='añadirMascota'>
      <h1>Editar mascota</h1>
      <div className='añadirMascotaForm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formField'>
          <label htmlFor='name'>Nombre de mascota: </label>
          <input
            type='text'
            id='name'
            onChange={ev => setPets({...pet, name: ev.target.value})}
            
            {...register('name', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='type'>Tipo de mascota: </label>
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
          <label htmlFor='sex'>Sexo: </label>
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
          <label htmlFor='size'>Tamaño: </label>
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
          <label htmlFor='age'>Edad: </label>
          <input
            type='text'
            id='age'
            
            {...register('age', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='adopted'>Adoptado: </label>
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
        <div className='formField2'>
          <label htmlFor='description'>Descripción: </label>
          <textarea
            id='description'
            name='description'
            rows='4'
            cols='50'
            
            {...register('description', { required: true })}>
            Pon aquí la descripción de tu mascota.
          </textarea>
        </div>
        <div className='formFieldPictures'>
          <div className='labelArchivos'>
          <label htmlFor='picture'>Elegir Archivos: </label>
          <input
            type='file'
            id='picture'
            multiple
            {...register('picture', { required: false })}
          />
          <input
            type='file'
            id='picture1'
            multiple
            {...register('picture1', { required: false })}
          />
          <input
            type='file'
            id='picture2'
            
            multiple
            {...register('picture2', { required: false })}
          />
          </div>
        </div>
        <button type='submit'>Editar</button>
      </form>
      </div>  
      </div>    
    </>
  );
};

export default EditPet