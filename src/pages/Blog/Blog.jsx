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
    <p className='main'><Link to='/'> --Volver a la vista principal</Link></p>
    </div>
    {blogs.map((blog)=> (
      <Link key={blog._id} to={`${blog._id}`}>
      <div className='carta-blog'>
       <img src={blog.picture} alt={blog.title}/>
        <p>{blog.title}</p>
        <p>{blog.content}</p>

      </div>
      </Link> 
    ))}


      
    </div>
  )
}

export default Blog