import React,  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { API } from '../../services/api'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './EditBlog.scss'


const EditBlog = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlogs]= useState({});  

  useEffect(() => {
    const getBlogsById = async () => {
      const res = await axios.get(
        `https://back-node-protectora.vercel.app/blogs/${id}`
        );
        console.log(res.data.Blog)
        setBlogs(res.data.Blog);
    };
    getBlogsById();
  });

  const onSubmit = (newdata) => {
    console.log(newdata);
    const formData = new FormData();
    formData.append('title', newdata.title);
    formData.append('content', newdata.content);
    formData.append('date', newdata.date);
    formData.append('picture', newdata.picture[0]);
    console.log("esto es formdata",formData);
    API.patch(`/blogs/${id}`, formData).then((res) => {
    });
    navigate('/gallery');
  };

  useEffect(() =>  {
    const getBlogsById = async () => {
      const res = await axios.get(
        `https://back-node-protectora.vercel.app/blogs/${id}`
      );
      setBlogs(res.data.Blog);
    }
    getBlogsById();
  },[]);

  return (
    <>
    <div className='añadirNoticiasForm'>
      <h1>Editar Blog</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formField'>
          <label htmlFor='title'>Título: </label>
          <input
            type='text'
            id='title'
            value={blog.title}
            onChange={ev => setBlogs({...blog, title: ev.target.value})}

            {...register('title', { required: true })}
          />
          <label htmlFor='date'>Fecha: </label>
          <input
            type='text'
            id='date'
            value={blog.date}
            onChange={ev => setBlogs({...blog, date: ev.target.value})}
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
            value={blog.content}
            onChange={ev => setBlogs({...blog, content: ev.target.value})}


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
  );
};

export default EditBlog