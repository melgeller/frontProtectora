import React from 'react'
import { useContext } from 'react'
import { PetContext } from '../../context/context'
import "./Blog.scss"
import { Link } from "react-router-dom";
import { JwtContext } from '../../context/jwtContext';
import Swal from 'sweetalert2';
import { API } from '../../services/api';


const Blog = () => {
  const { blogs } = useContext(PetContext)
  const { jwt } = useContext(JwtContext);

  
  const deleteBlog = (id, name) => {
    console.log({ id });
    Swal.fire({
      title: '¿Estas seguro?',
      text: `Vamos a borrar la entrada y esta acción no es reversible`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!',
    }).then((result) => {
      if (result.isConfirmed) {
        API.delete(`http://localhost:8001/blogs/${id}`).then((res) => {});
        Swal.fire(
          `¡tu entrada ha sido borrado!`,
          'Tu entrada ha sido borrada de la BBDD.',
          'ok',
          window.location.reload(false)
        );
      }
    });
  };

  return (
    <div className='blog'>
    <div className='goBack'>
    <div className='main'><Link to='/'>
    <img src="../../../assets/flecha.png" alt="flecha"/>
    </Link></div>
    <div className='intro'>
      <h2>Noticias</h2>
    </div>
    </div>


    {blogs.map((blog)=> (
      <div className='carta-blog'>
       <img src={blog.picture} alt={blog.title}/>
        <h4>{blog.title}</h4>
        <p className='hover'>{blog.content}</p>
        {jwt && (
            <>
            <div className='textoLinks'>
              <Link key={blog._id} to={`/adminblog/${blog._id}`}>
                <p className='linkBlog'>Editar</p>
              </Link>
              <p
                className='linkBlog'
                onClick={(ev) => deleteBlog(`${blog._id}`, `${blog.title}`)}>
                Borrar
              </p>
              </div>
            </>
          )}

      </div> 
    ))}


      
    </div>
  )
}

export default Blog

