import React,{useContext,memo} from 'react'
import {ShopContext} from '../App';

const Product = ({product}) => {
  const {handleSelectedProduct} = useContext(ShopContext) 
  
  return (
    <div className='card bg-info text-white col-5 m-1 pb-2 d-flex'>
    <div className='w-100 h-100'>
    <img src={product.img} alt="" className="img-fluid h-100 mb-auto" />
    </div>
    <span>Name :{product.name}</span> <br />
    <span>Price : {product.price}</span>
    <button className='btn btn-dark text-white mt-auto ' onClick={()=>{handleSelectedProduct(product.id)}}>Add to card</button>
    </div>
  )
}
  
    
export default memo(Product) 



