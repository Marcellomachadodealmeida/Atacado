import {Request, Response} from 'express'
import db from '../database/connection';

export default class CreateProducts{
  async index(req:Request,res:Response){
    const filters =req.query

    const name_category =filters.name_category as string
    const name_brand = filters.name_brand as string

    if(!filters.name_category || !filters.name_brand){
      return res.status(400).json({
        erro:'Missing filters to search Products'
      })
    }
    const products = await db('category')
      .where('category.name_category','=',name_category)
      .join('brand','brand.category_id','=','category.id')
      .join('products','products.brand_id','=','brand.id')
      
    return res.json(products)
  }

  async create(req:Request,res:Response){
    const {
      name_category,
      name_brand,
      name_product,
      price,
      amaunt
    } = req.body;
  
    const trx = await db.transaction();
  
    try{
     const insertedCategoryIds = await trx('category').insert({
        name_category,
      });
  
      const category_id = insertedCategoryIds[0];
      
      const insertedBrandIds = await trx('brand').insert({
        name_brand,
        category_id,
      });
      
      const brand_id = insertedBrandIds[0];
  
      await trx('products').insert({
        name_product,
        price,
        amaunt,
        brand_id
      })
  
      await trx.commit();
      
      return res.status(201).send()
    }catch(err){
  
      await trx.rollback();
  
      return res.status(400).json({erro:'Unexpected erro!'})
    }
  };
}