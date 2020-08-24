import express from 'express'
import CreateProduct from './controllers/CreateProducts'
import LoginTable from './controllers/LoginTable';

const loginTable = new LoginTable();
const createProducts =new CreateProduct();

const routes = express.Router();

routes.get('/',loginTable.index)
routes.get('/home',createProducts.index)
routes.post('/cadastro',createProducts.create)
routes.post('/createUser',loginTable.create)

export default routes;