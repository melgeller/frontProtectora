import React from 'react'
import { useContext } from 'react'
import { PetContext } from '../../context/context'
import "./Blog.scss"
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogs } = useContext(PetContext)

  return (
    <div className='blog'>
    <div className='goBack'>
    <div className='main'><Link to='/'>
    <img src="../../../assets/flecha.png" alt="flecha"/>
    </Link></div>
    <div className='intro'>
      <h2>Bienvenido </h2>
      <h3>a nuestro blog de Animalitos</h3>
    </div>
    </div>
    {blogs.map((blog)=> (
      <div className='carta-blog'>
       <img src={blog.picture} alt={blog.title}/>
        <h4>{blog.title}</h4>
        <p className='hover'>{blog.content}</p>

      </div> 
    ))}


      
    </div>
  )
}

export default Blog

