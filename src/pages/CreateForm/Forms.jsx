import React from 'react';
import AddNewPet from '../../components/Admin/AddNewPet';
import AddBlogs from '../../components/Admin/AddBlogs';

import EditPet from '../../components/Admin/EditPet';
import { useParams } from 'react-router-dom';


const Forms = () => {
  const { id } = useParams();
  console.log('id de la mascota', id);

  return (
    <>
      <div className='formulariosMain'>
      {!id && (
        <>
          <AddNewPet></AddNewPet>
          <AddBlogs></AddBlogs>
        </>
      )}
      {id && <EditPet></EditPet>}
      </div>
    </>
  );
};

export default Forms;
