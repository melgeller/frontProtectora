import React from 'react';
import { useForm } from 'react-hook-form';
import { API } from '../../services/api';
import './AddBlogs.scss'


const AddBlogs = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmi = (data) => {

        console.log(data);
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('picture', data.picture[0]);
        formData.append('date', data.date);
    
        
        console.log(formData);
        API.post('/blogs/', formData).then((res) => {
          console.log('esto es res', res);
        });
        
      };
  return (
    <>
    <div className='añadirNoticiasForm'>
    <h1>Añadir entrada</h1>
      <form onSubmit={handleSubmit(onSubmi)}>
        <div className='formField'>
          <label htmlFor='title'>Título: </label>
          <input
            type='text'
            id='title'
            {...register('title', { required: true })}
          />
          <label htmlFor='date'>Fecha: </label>
          <input
            type='text'
            id='date'
            {...register('date', { required: true })}
          />
        </div>
       
        <div className='formField'>
          <label htmlFor='content'>Descripción: </label>
          <textarea
            id='content'
            name='content'
            rows='4'
            cols='50'
            {...register('content', { required: true })}>
            
          </textarea>
        </div>
        <div className='formField2'>
          <label htmlFor='picture'>Elegir Archivos:</label>
          <input
            type='file'
            id='picture'
            multiple
            {...register('picture', { required: false })}
          />
        
        </div>
        <button type='submit'>Añadir blog</button>
      </form>
      </div>
      </>
  )
}

export default AddBlogs