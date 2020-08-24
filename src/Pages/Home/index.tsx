import React, { useState, FormEvent } from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import Produtos,{productsId} from '../../components/Produtos'
import api from '../../services/api';


  function Home(){
    const[products,setProducts]=useState([]);
    
    const [name_category,setCategory]= useState(' ');
    const [name_brand,setBrand]= useState(' ');  

    //Fazendo uma requisição para pegar as informções contidas no bd usando as querys parms
    //o retorno vai ser usado pela constante products
    // será feito um map para que cada resultado encontrado sejá um componente 
    async function seachProducts(e:FormEvent){
      e.preventDefault();
      const response = await api.get('/home',{
        params:{
          name_category,
          name_brand
        }
      })
      setProducts(response.data)
    }
    return (
      <div className='Container-Page'>
      <div className='Menu-Estoque'>
        <Link to='/' className='back-login'></Link>
        <h1>Bem Vindo, Usuário</h1>
        <Link to='/cadastro' className='go-cadastro'></Link>
        <form className='Container-Home'onSubmit={seachProducts}>
          <div className='Container-Input-Categoria'>
            <label htmlFor="Categoria-Produtos">Categoria</label>
            <select 
            name='Categoria-Produtos'
            value={name_category}
            onChange={(e)=>{setCategory(e.target.value)}}>
              <option>Selecione Uma Categoria</option>
              <option>Furadeiras</option>
              <option>Parafusadeiras</option>
              <option>Retificadoras</option>
              <option>Lixadeiras</option>
              <option>Plainas</option>
            </select>
          </div>
          <div className='Container-Input-Categoria'>
            <label htmlFor="Marca-Produtos">Marca</label>
            <select 
            name='Marca-Produtos'
            value={name_brand}
            onChange={(e)=>{setBrand(e.target.value)}}>
              <option>Selecione Uma Marca</option>
              <option>DeWalt</option>
              <option>Vonder</option>
              <option>Makita</option>
              <option>BOSCH</option>
              <option>Black and Decker</option>
              <option>Stanley</option>
            </select>
          </div>
          <button type='submit'
          className='Submit-Button'>
          Buscar
          </button>
        
        </form>
      </div>
      <main>
        {products.map((product:productsId) =>{
            return <Produtos key={product.id} productsItem={product}/>
        })}

      </main>
      </div>
    )
   }
  export default Home;
