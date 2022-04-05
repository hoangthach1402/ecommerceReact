import React,{useContext} from 'react'
import {ShopContext} from '../App'
const Cart = ({cart}) => {
  const {handleThanhToan} = useContext(ShopContext) ;
  // console.log(handleThanhToan);
  // // console.log(cart)
  const total = cart.reduce((a,b)=>{return a+parseInt(b.price)},0)
  console.log(total)
  return (
    <div className="bg-info p-2">
    {cart.map(c=>(
    <div className="row text-white">
    
    <div className="col-6">
    <img src={c.img} className="img-fluid h-25 w-25" alt="" />
    Name:  {c.name}
    </div>
    <div className="col-3">
    Price: {c.price}
    </div>
    <div className="col-3">
    <input type="number" id="tentacles" name="tentacles"
       min="10" max="100"></input>
    </div>
    </div>
    ))}
    <div className='fw-bold fs-1'>Total : {total}  </div>
    <div className="row">
    <button className="mt-auto btn btn-dark" onClick={()=>handleThanhToan()}>Thanh Toan</button>
    </div>
    </div>
    
    )
  }
      

export default Cart