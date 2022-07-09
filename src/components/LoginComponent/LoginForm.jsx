import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../../context/jwtContext';
import { API } from '../../services/api';
import "./LoginForm.scss"

const LoginForm = () => {
    const { setJwt } = useContext(JwtContext);
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();  

    const onSubmit = (formData) => {
        API.post('users/login', formData).then((res) => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', res.data.user.email);
          setJwt(localStorage.getItem("token"));
          navigate('/admin');
        });
      };
    return (
      <div class='login'>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor='email'>Email:</label>
          <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type='email'
            id='email'
            {...register('email', { required: true })}
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor='password'>Password:</label>
          <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type='password'
            id='password'
            {...register('password', { required: true })}
          />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>Login</button>
      </form>
      </div>
  )
}

export default LoginForm