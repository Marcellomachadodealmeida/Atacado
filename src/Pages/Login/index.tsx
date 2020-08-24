import React,{ useState, FormEvent } from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/api';
import {useHistory} from 'react-router-dom'

import './index.css'


function Login() {
  const [User,setUser]= useState('');
  const [Password,setPassword]= useState('');  
  const history = useHistory();
  
  async function CheckUsers(e:FormEvent){
    e.preventDefault();
     await api.get('/',{
      params:{
        User,
        Password
      }
      
    })
    history.push('/home')
  }

  return (
    <div className="Page-Home">
    <div className="Container">
      <div className='Container-img'></div>
      <form className='Container-login'onSubmit={CheckUsers}>
        <h2> Bem Vindo</h2>
        <div className='form'>
          <input type='text'
          name='name'
          autoComplete='off'
          required
          value={User}
          onChange={(e)=>{setUser(e.target.value)}}
          />
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Usuário</span>
          </label>
        </div>
        <div className='form'>
          <input type='text'
          name='name'
          autoComplete='off'
          required
          value={Password}
          onChange={(e)=>{setPassword(e.target.value)}}/>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Password</span>
          </label>
        </div>
        
        <div className='Container-Button-Login'>
        <button type='submit' className='Button-Login'>LOGIN</button>
        </div>
        <Link to='/cadastrouser'
        className='CreateUser'>Create Account</Link>
      </form>
    </div>
    </div>
  )
}

export default Login;