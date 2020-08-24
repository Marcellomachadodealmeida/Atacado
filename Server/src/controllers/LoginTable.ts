import {Request, Response} from 'express'
import db from '../database/connection';

export default class LoginTable{
  async index(req:Request,res:Response){
    const filters =req.query

    const User =filters.User as string

    if(!filters.User || !filters.Password){
      return res.status(400).json({
        erro:'Missing filters to search Products'
      })
    }
    const products = await db('TableLogin')
      .where('TableLogin.User','=',User)   
      
    return res.json(products)
  }


  async create(req:Request,res:Response){
    const {
      User,
      Password
   } = req.body;
   try{
    await db('TableLogin').insert({
      User,
      Password
    })
    return res.status(201).send()
   }catch(err){
    return res.status(400).json({erro:'Unexpected erro!'})
   }
      
}}
