import React from 'react';
import AddNewPet from '../../components/Admin/AddNewPet';
import EditPet from '../../components/Admin/EditPet';
import { useParams } from "react-router-dom";
import { useContext } from 'react';


const Forms = () => {
  const { id } = useParams();
  console.log ("id de la mascota",id);

  return (
    <>
      <div>Forms</div>
      {!id && (
      <AddNewPet></AddNewPet>
      )}
    {id && (
      <EditPet></EditPet>
    )}
    </>
  );
};

export default Forms;
