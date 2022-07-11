import React from 'react';
import AddNewPet from '../../components/Admin/AddNewPet';
import AddBlogs from '../../components/Admin/AddBlogs';

const Forms = () => {
  return (
    <div className='formulariosMain'>
      <AddNewPet></AddNewPet>
      <AddBlogs></AddBlogs>
    </div>
  );
};

export default Forms;
