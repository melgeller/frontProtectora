import React from 'react';
import AddNewPet from '../../components/Admin/AddNewPet';
import EditPet from '../../components/Admin/EditPet';
import { useParams } from "react-router-dom";
import { useContext } from 'react';


const Forms = () => {
  const { id } = useParams();
  console.log ("este es el id que me pasan",id);
  console.log("esto es useContext",useContext);
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
