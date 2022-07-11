import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../../context/jwtContext';
import { API } from '../../services/api';
import './LoginForm.scss';

const LoginForm = () => {
  const { setJwt } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post('users/login', formData).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.user.email);
      setJwt(localStorage.getItem('token'));
      navigate('/adminmascota');
    });
  };
  return (
    <div className='loginFondo'>
      <div className='loginForm'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='formField email'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              {...register('email', { required: true })}
            />
          </div>
          <div className='formField password'>
            <label htmlFor='password'>Contraseña:</label>
            <input
              type='password'
              id='password'
              {...register('password', { required: true })}
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
