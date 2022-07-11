import React from 'react';
import { useForm } from 'react-hook-form';
import { API } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import './AddNewPet.scss'


const AddNewPet = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    //formData.picture = formData.picture[0];
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('type', data.type);
    formData.append('sex', data.sex);
    formData.append('size', data.size);
    formData.append('age', data.age);
    formData.append('adopted', data.adopted);
    formData.append('description', data.description);
    formData.append('picture', data.picture[0]);
    formData.append('picture1', data.picture1[0]);
    formData.append('picture2', data.picture2[0]);
    console.log(formData);
    API.post('/pets/', formData).then((res) => {
      console.log('esto es res', res);
    });
    navigate('/gallery');
  };
  
  return (
    <>
    <div className='añadirMascota'>
      <h1>Añadir mascota</h1>
      <div className='añadirMascotaForm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formField'>
          <label htmlFor='name'>Nombre de mascota: </label>
          <input
            type='text'
            id='name'
            {...register('name', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='type'>Tipo de mascota: </label>
          <select
            name='type'
            id='type'
            {...register('type', { required: true })}>
            <option value='perro'>Perro</option>
            <option value='gato'>Gato</option>
          </select>
        </div>
        <div className='formField'>
          <label htmlFor='sex'>Sexo: </label>
          <select name='sex' id='sex' {...register('sex', { required: true })}>
            <option value='macho'>Macho</option>
            <option value='hembra'>Hembra</option>
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
          <label htmlFor='picture'>Elegir archivos: </label>
          <div className='labelArchivos'>
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
        </div>
        <button type='submit'>Añadir mascota</button>
      </form>
      </div>
      </div>
      
    </>
  );
};

export default AddNewPet;
