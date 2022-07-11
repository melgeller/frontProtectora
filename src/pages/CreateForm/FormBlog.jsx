import React from 'react';
import AddBlogs from '../../components/Admin/AddBlogs';
import EditBlog from '../../components/Admin/EditBlog';
import { useParams } from 'react-router-dom';

const FormBlog = () => {
  const { id } = useParams();
  console.log('id de la mascota', id);
  console.log('id del blog', id);

  return (
    <>
      <div className='formulariosMain'>
        {!id && (
          <>
            <AddBlogs></AddBlogs>
          </>
        )}
        <>{id && <EditBlog></EditBlog>}</>
      </div>
    </>
  );
};

export default FormBlog;
