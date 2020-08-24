import React,{ useState, FormEvent } from 'react'
import './index.css'

import api from '../../services/api'
import {useHistory} from 'react-router-dom'


 function CadastroUser() {   
  const history = useHistory();
  const [User,setUser] = useState('')
   const [Password,setPassword] = useState('')

  function handleRegisterProduct(e:FormEvent){
    e.preventDefault();

    api.post('createUser',{
      User,
      Password,
      
    }).then(() =>{
      alert('Cadastro realizado com sucesso!');

      history.push('/')
    }).catch(()=>{
      alert('Erro no cadastro')
    })
   }
  return (
    <div className="Page-Home">
    <div className="Container">
      <div className='Container-img1'></div>
      <form onSubmit={handleRegisterProduct} className='Container-login'>
        
        <h2> Olá</h2>
        <div className='form'>
          <input type='text' 
          name='name'
           autoComplete='off'
            required
            value={User}
            onChange={(e) =>{setUser(e.target.value)}}/>
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
            onChange={(e) =>{setPassword(e.target.value)}}/>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Password</span>
          </label>
        </div>
        
        <div className='Container-Button-Cadastro'>
        <button type='submit' className='Button-Cadastro'>Create</button>
        </div>
        
      </form>
    </div>
    </div>
  )
  
}
export default CadastroUser;