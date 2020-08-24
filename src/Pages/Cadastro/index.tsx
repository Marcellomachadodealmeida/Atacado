import React, { useState, FormEvent } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'


 function Cadastro() {
   const history = useHistory();
   const [name_category,setCategory] = useState('')
   const [name_brand,setBrand] = useState('')
   const [name_product,setProduct] = useState('')
   const [price,setPrice] = useState('')
   const [amaunt,setAmaunt] = useState('')

  
   function handleRegisterProduct(e:FormEvent){
    e.preventDefault();

    api.post('cadastro',{
      name_category,
      name_brand,
      name_product,
      price: Number(price),
      amaunt:Number(amaunt)
    }).then(() =>{
      alert('Cadastro realizado com sucesso!');

      history.push('/home')
    }).catch(()=>{
      alert('Erro no cadastro')
    })
   }

  return (
    <div className='Container-Page'>
      <div className='Container-menu'>
        <Link to='/home' className='back-home'></Link>
        <h1>Cadastro de Produtos</h1>
      </div>
      <form onSubmit={handleRegisterProduct} className='Container-main'>
        <h1>Formulário</h1>
        <div className='Container-Cadastro-Input'>
            <label htmlFor='cadastro-categoia'>Categoria</label>
            <input type='text'
            name='cadastro-categoria'
            value={name_category}
            onChange={(e) =>{setCategory(e.target.value)}}/>
        </div>
        <div className='Container-Cadastro-Input'>
            <label htmlFor='cadastro-marca'>Marca</label>
            <input type='text' name='cadastro-marca'
            value={name_brand}
            onChange={(e) =>{setBrand(e.target.value)}}/>
        </div>
        <div className='Container-Cadastro-Input'>
            <label htmlFor='cadastro-produto'>Nome do Produto</label>
            <input type='text' name='cadastro-produto'
            value={name_product}
            onChange={(e) =>{setProduct(e.target.value)}}/>
        </div>
        <div className='Container-Cadastro-Preco-QTD'>
          <div className='Container-Cadastro-Input-preco'>
            <label htmlFor='cadastro-preco'>Preço</label>
            <input type='text'
            name='cadastro-preco'
            value={price}
            onChange={(e) =>{setPrice(e.target.value)}}/>
          </div>
          <div className='Container-Cadastro-Input-preco'>
            <label htmlFor='cadastro-preco'>Quantidade</label>
            <input type='text'
            name='cadastro-preco'
            value={amaunt}
            onChange={(e) =>{setAmaunt(e.target.value)}}/>
          </div>
        </div>
        <div className='Container-Button-Cadastro'>
        <button type='submit' className='Button-Cadastro'>Cadastrar</button>
        </div>
      </form>
    </div>
  )
}
export default Cadastro;