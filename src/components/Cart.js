import React,{useContext,useEffect,useState} from 'react'
import {ShopContext} from '../App'
const Cart = () => {
  const {handleThanhToan,carts,handleCart} = useContext(ShopContext) ;
  const [total,setTotal] = useState(0) ;
  const handleChangeQuality =(id,changes)=>{
    let newCart = carts.find(c=>c.id===id) ;
    let newCarts =[...carts]
    newCart ={...newCart,...changes}
    // console.log(newCart)
    let index = carts.findIndex(c=>c.id===id) ;
    newCarts[index] = newCart ;
    handleCart(newCarts)
  }
  
  useEffect(()=>{
    // console.log(total)
     setTotal(carts.reduce((a,b)=>{return a+(parseInt(b.price)* b.quantity)},0))
    // total=2 ;
    console.log('change')
  },[handleChangeQuality])
  // console.log(total)
  return (
    <div className="bg-info p-2">
    {carts.map(c=>(
    <div key={c.id} className="row text-white">
    
    <div className="col-6">
    <img src={c.img} className="img-fluid h-25 w-25" alt="" />
    Name:  {c.name}
    </div>
    <div className="col-2">
    Price: {c.price}
    </div>
    <div className="col-4">
    <input type="number" id="tentacles" name="tentacles"
       min="1" max="10" value={parseInt(c.quantity)} onInput={e=>handleChangeQuality(c.id,{quantity:parseInt(e.target.value)})}></input>
    <button>X</button>
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