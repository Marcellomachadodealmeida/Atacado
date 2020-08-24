import React from 'react'

import {BrowserRouter,Route} from 'react-router-dom'
import Login from '../src/Pages/Login'
import Home from '../src/Pages/Home'
import Cadastro from '../src/Pages/Cadastro'
import CadastroUser from '../src/Pages/CadastroUser'

function Routes(){
  return(
    <BrowserRouter>
      <Route path="/"  exact component={Login}/>
      <Route path="/home" component={Home} />
      <Route path='/cadastro' component={Cadastro}/>
      <Route path='/cadastrouser' component={CadastroUser}/>

    </BrowserRouter>
  )
}

export default Routes;