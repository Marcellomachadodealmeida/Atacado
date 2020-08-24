import React from 'react'

import './index.css'

export interface productsId{
  id:number;
  name_category: string;
  name_brand: string;
  name_product: string;
  price: number;
  amaunt: number;
};

interface ListProcutsProps{
  productsItem:productsId;
}

const Produtos:React.FC<ListProcutsProps>=({productsItem})=>{
  return(
    <article className="produtos-list">
          <div className='Podutos-title'>
            <h2>{productsItem.name_product}</h2>
            <h2>R${productsItem.price}</h2>
          </div>
          <div className='Fotter'>
            <div className='Fotter-Button'>
              <a href='/'>Comprar</a>
            </div>
            <div className='Fotter-input'>
              <label htmlFor='Qtd-input'>Qtd</label>
              <input type='text' name='Qtd-input'/>
            </div>
          </div>
        </article>
  )
}
export default Produtos