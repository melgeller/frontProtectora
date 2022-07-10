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
    </div>
    {blogs.map((blog)=> (
      <div className='carta-blog'>
       <img src={blog.picture} alt={blog.title}/>
        <p>{blog.title}</p>
        <p>{blog.content}</p>

      </div> 
    ))}


      
    </div>
  )
}

export default Blog

