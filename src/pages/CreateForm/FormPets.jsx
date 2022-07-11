import React from 'react';
import AddNewPet from '../../components/Admin/AddNewPet';
import EditPet from '../../components/Admin/EditPet';
import { useParams } from 'react-router-dom';


const FormPet = () => {
  const { id } = useParams();
  console.log('id de la mascota', id);
  console.log('id del blog', id);


  return (
    <>
      <div className='formulariosMain'>
      {!id && (
        <>
          <AddNewPet></AddNewPet>
        </>
      )}
      <>
      {id && <EditPet></EditPet>}
      </>
      </div>
    </>
  );
};

export default FormPet;
