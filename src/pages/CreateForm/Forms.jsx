import React from 'react';
import AddNewPet from '../../components/Admin/AddNewPet';
import AddBlogs from '../../components/Admin/AddBlogs';
import EditBlog from '../../components/Admin/EditBlog';
import EditPet from '../../components/Admin/EditPet';
import { useParams } from 'react-router-dom';


const Forms = () => {
  const { id } = useParams();
  console.log('id de la mascota', id);
  console.log('id del blog', id);


  return (
    <>
      <div className='formulariosMain'>
      {!id && (
        <>
          <AddNewPet></AddNewPet>
          <AddBlogs></AddBlogs>
        </>
      )}
      <>
      {id && <EditPet></EditPet>}
      {/* {id && <EditBlog></EditBlog>} */}
      </>
      </div>
    </>
  );
};

export default Forms;
